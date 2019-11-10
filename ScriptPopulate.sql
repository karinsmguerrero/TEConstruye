CALL addProject(120,120,3,4,1,'juan1','San Jose','Desamparados','Sn Rafael');
Insert Into stage(stagetype,idproject,startdate,enddate)
	VALUES(1,4,'2019-10-01','2019-11-02'),(2,4,'2019-10-01','2019-11-02')
SELECT * FROM vProject
SELECT id, name, lotarea,rooms,restrooms,floors, builtarea, client_username,client_name, 
              CONCAT(province, ',', canton,',',district) AS address FROM public.vProject
			  WHERE id=4
   