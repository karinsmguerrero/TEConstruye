/***************************************************************************************
*Tipo: Función
*Descripción: Concatena el nombre de un Usuario
*Párametros Entrada: Username:VARCHAR(60)
*Parámetros Salida: Nombre Completo:VARCHAR(50)
***************************************************************************************/
CREATE FUNCTION get_fullname(uname VARCHAR(60))
RETURNS VARCHAR(190) AS $$
DECLARE fullname VARCHAR(190);
BEGIN
        SELECT  CONCAT(firstname, ' ', lastnamea,' ',lastnameb)  
		INTO fullname
        FROM    users
        WHERE   username = $1;

        RETURN fullname;
END;
$$  LANGUAGE plpgsql;


/***************************************************************************************
*Tipo: Función
*Descripción: Concatena la ubicación
*Párametros Entrada: id:INT
*Parámetros Salida: Ubicación Completa:VARCHAR(190)
***************************************************************************************/
CREATE FUNCTION get_location(id int)
RETURNS VARCHAR(190) AS $$
DECLARE loc VARCHAR(190);
BEGIN
        SELECT  CONCAT(province, ',', canton,',',district)  
		INTO loc
        FROM    location
        WHERE   location.id = $1;

        RETURN loc;
END;
$$  LANGUAGE plpgsql;
    
/***************************************************************************************
*Tipo: Función
*Descripción: Obtiene el Id de la ubicación
*Párametros Entrada: [province:VARCHAR(60),
*					canton:VARCHAR(60),district:VARCHAR(60)]
*Parámetros Salida: Id:INT
***************************************************************************************/
CREATE FUNCTION get_idlocation(province VARCHAR(60),canton VARCHAR(60),district VARCHAR(60))
RETURNS INT AS $$
DECLARE loc INT;
BEGIN
        SELECT  id
		INTO loc
        FROM    location
        WHERE   (location.province = $1
		AND location.canton = $2
		AND location.district = $3);

        RETURN loc;
END;
$$  LANGUAGE plpgsql;

/***************************************************************************************
*Tipo: Vista
*Descripción: Lista de Proyectos 
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/
CREATE VIEW vProject AS
    SELECT project.id, project.name,lotarea,rooms,restrooms,
		floors,builtarea, client AS client_username,
		get_fullname(client) AS client_name,
		province,canton,district
    FROM project INNER JOIN location 
	ON project.idlocation= location.id;

/***************************************************************************************
*Tipo: Proceso
*Descripción: Agregar un nuevo Proyecto
*Párametros Entrada: Id Anuncio:[name:VARCHAR(250),lotarea:INT, builtarea:INT, 
*									   rooms:INT, restrooms:INT, 
*									   floors:INT, client:VARCHAR(60),
*									   province:VARCHAR(60),canton:VARCHAR(60),
*									   district:VARCHAR(60)]
*Parámetros Salida: N/A
***************************************************************************************/
CREATE OR REPLACE PROCEDURE addProject(name VARCHAR(250),lotarea INT, builtarea INT, 
									   rooms INT, restrooms INT, 
									   floors INT, client VARCHAR(60),
									   province VARCHAR(60),canton VARCHAR(60),
									   district VARCHAR(60))
LANGUAGE plpgsql    
AS $$
BEGIN
    -- Insertar propiedad
	INSERT INTO project(name,lotarea,builtarea,rooms,
					   restrooms,floors,client,idlocation)
	VALUES($1,$2,$3,$4,$5,$6,$7,get_idlocation($8,$9,$10)); 
    COMMIT;
END;
$$;

/***************************************************************************************
*Tipo: Vista
*Descripción: Etapas asignadas a un proyecto
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/
CREATE VIEW vStage AS
    SELECT stage.id, stage_type.name AS stagetype,startdate,enddate,idproject
    FROM stage INNER JOIN stage_type 
	ON stage.stagetype= stage_type.id;

/***************************************************************************************
*Tipo: Vista
*Descripción: Gastos por etapa de un proyecto
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/
CREATE VIEW vExpenses AS
    SELECT stage.idproject,project.name AS project_name,
	idstage, stage.stagetype AS stage_name, 
	bill_item.quantity*supplies.price AS total
    FROM bill INNER JOIN stage 
	ON bill.idstage= stage.id
	INNER JOIN project 
	ON project.id=stage.idproject
	INNER JOIN bill_item 
	ON bill.id=bill_item.idbill
	INNER JOIN supplies
	ON bill_item.idsupply=supplies.id;
	
	

/***************************************************************************************
*Tipo: Vista
*Descripción: Planilla de empleados
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/	
  CREATE VIEW vPayrollEmployees AS
    SELECT stage.idproject,project.name AS project_name,
	idstage, stage.stagetype AS stage_name, 
	worker_on_project.username AS employee_username,
	get_fullname(worker_on_project.username) AS employee, 
	project.name,worker_on_project.hours, employee.salary,
	employee.salary*worker_on_project.hours AS total
    FROM worker_on_project INNER JOIN stage 
	ON worker_on_project.idstage= stage.id
	INNER JOIN employee 
	ON worker_on_project.username=employee.username
	INNER JOIN project 
	ON project.id=stage.idproject;
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/***************************************************************************************
*Tipo: Función
*Descripción: Obtiene el total a pagar por la planilla 
*			  dada una etapa del proyecto
*Párametros Entrada: idstage:INT
*Parámetros Salida: total:INT
***************************************************************************************/
CREATE OR REPLACE FUNCTION public.get_payroll_budget(
    idstage integer)
    RETURNS integer
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$
DECLARE total INT;
BEGIN

IF EXISTS (SELECT 1 FROM vPayrollEmployees pay WHERE pay.idstage = $1 ) THEN
  -- do something
  
  SELECT  SUM(vPayrollEmployees.total)
    INTO total
        FROM    vPayrollEmployees
        WHERE   (vPayrollEmployees.idstage = $1);
        RETURN total;
  else 
    return 0;
    end if;
END;
$BODY$;

ALTER FUNCTION public.get_payroll_budget(integer)
    OWNER TO postgres;



/***************************************************************************************
*Tipo: Función
*Descripción: Obtiene el total de gastos de una etapa
*			  facturas+planilla 
*Párametros Entrada: idstage:INT
*Parámetros Salida: total:INT
***************************************************************************************/
CREATE FUNCTION get_expenses_budget(idstage INT)
RETURNS INT AS $$
DECLARE total INT;
BEGIN
        SELECT  SUM(vExpenses.total)
		INTO total
        FROM    vPayrollEmployees
        WHERE   (vPayrollEmployees.idstage = $1);
        RETURN total;
END;
$$  LANGUAGE plpgsql;

/***************************************************************************************
*Tipo: Vista
*Descripción: Obtiene el total de gastos de una etapa
*			  facturas+planilla 
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/
CREATE VIEW vExpensesByStage AS
    SELECT stage.idproject,project.name AS project_name,
	idstage, stage.stagetype AS stage_name, 
	 get_expenses_budget(idstage) AS Expenses,
	 get_payroll_budget(idstage) AS payroll
    FROM bill INNER JOIN stage 
	ON bill.idstage= stage.id
	INNER JOIN project 
	ON project.id=stage.idproject
	INNER JOIN bill_item 
	ON bill.id=bill_item.idbill
	INNER JOIN supplies
	ON bill_item.idsupply=supplies.id;

/***************************************************************************************
*Tipo: Función
*Descripción: Obtiene el total de gastos de un proyecto
*Párametros Entrada: idproject:INT
*Parámetros Salida: tota:INT
***************************************************************************************/
CREATE FUNCTION get_expenses_project(idproject INT)
RETURNS INT AS $$
DECLARE total INT;
BEGIN
        SELECT  SUM(vExpensesByStage.expenses)+ SUM(vExpensesByStage.payroll)
		INTO total
        FROM    vExpensesByStage
        WHERE   (vExpensesByStage.idproject = $1);
        RETURN total;
END;
$$  LANGUAGE plpgsql;


/***************************************************************************************
*Tipo: Vista
*Descripción: Materiales por vista
*Párametros Entrada: N/A
*Parámetros Salida: N/A
***************************************************************************************/
CREATE VIEW vSuppliesByStage AS
	SELECT idproject,project.name AS project_name,
		idstage, stage_type.name AS stage_type, 
		idsupply, supplies.name AS supply_name,
		quantity,price, (quantity*price)AS total
	FROM supplies_on_project 
	INNER JOIN stage 
	ON supplies_on_project.idstage= stage.id
	INNER JOIN project
	ON stage.idproject=project.id
	INNER JOIN supplies 
	ON supplies.id=supplies_on_project.idsupply
	INNER JOIN stage_type
	ON stage_type.id=stage.stagetype;
			