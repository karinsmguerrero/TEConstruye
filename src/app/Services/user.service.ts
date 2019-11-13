import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Models/client';
import { ConstantsService } from './constants.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Models/employee';
import { Engineer } from '../Models/engineer';
import { EmployeeAux } from '../Models/employee-aux.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  engineers: Engineer[];
  constructors: Client[];
  employees: Employee[];
  employeeList: EmployeeAux[];

  constructor(private http: HttpClient, private constants: ConstantsService, private toastr: ToastrService) { }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar usuarios nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
  registerClient(user: Client) {
    this.http.post(this.constants.routeURL + '/PostClient', user).subscribe(res => {
      this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
    }, error => {
      this.toastr.error('Error!', 'Usuario no registrado');
    });
  }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar empleados nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
  registerEmployee(user: Employee) {
    this.http.post(this.constants.routeURL + '/PostEmployee', user).subscribe(res => {
      this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
    }, error => {
      this.toastr.error('Error!', 'Usuario no registrado');
    });
  }

  /*
    Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
    Objetivo: registrar empleados nuevos
    Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
    */
  registerEngineer(user: Engineer) {
    //alert("Got: " + user as string);
    this.http.post(this.constants.routeURL + '/PostEngineer', user).subscribe(res => {
      this.toastr.success('Éxito!', 'Ingeniero registrado exitosamente');
    }, error => {
      this.toastr.error('Error!', 'Usuario no registrado');
    });
    
    // return this.http.post(this.constants.routeURL + '/api/User/Register', body);
  }

  getAllEngineers() {
    this.http.get(this.constants.routeURL + '/GetEngineers').toPromise().then((res: Response) => {
      this.engineers = res['users'] as Engineer[]
    });
  }

  getAllConstructors() {
    this.http.get(this.constants.routeURL + '/GetClients').toPromise().then((res: Response) => {
      this.constructors = res['users'] as Client[];
    });
  }

  getAllEmployees() {
    this.http.get(this.constants.routeURL + '/GetEmployees').toPromise().then((res: Response) => {
      this.employees = res['users'] as Employee[]
    });
  }

  getEmployees() {
    this.http.get(this.constants.routeURL + '/GetAllEmployees').toPromise().then((res: Response) => {
      this.employeeList = res['users'] as EmployeeAux[]
    });
  }
}
