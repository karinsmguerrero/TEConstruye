import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Models/client';
import { ConstantsService } from './constants.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Models/employee';
import { Engineer } from '../Models/engineer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  engineers: Engineer[];
  constructors: Client[];
  employees : Employee[];

  constructor(private http: HttpClient, private constants: ConstantsService, private toastr: ToastrService) { }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar usuarios nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
  registerClient(user: Client) {
    this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
    this.http.post(this.constants.routeURL + '/PostClient', user);//.subscribe(res => alert(res.toString()));
  }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar empleados nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
  registerEmployee(user: Employee) {
    const body = {
      telephone: user.telephone,
      firstname: user.firstname,
      lastnamea: user.lastnamea,
      lastnameb: user.lastnameb,
      id: user.id,
      salary: user.salary
    }
    this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
    return this.http.post(this.constants.routeURL + '/PostEmployee', body);
  }

  /*
    Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
    Objetivo: registrar empleados nuevos
    Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
    */
  registerEngineer(user: Engineer) {
    //alert("Got: " + user as string);
    this.http.post(this.constants.routeURL + '/PostEngineer', user);
    this.toastr.success('Éxito!', 'Ingeniero registrado exitosamente');
    // return this.http.post(this.constants.routeURL + '/api/User/Register', body);
  }

  getAllEngineers(){
    this.http.get(this.constants.routeURL + '/GetEngineers').toPromise().then((res: Response) => {
      this.engineers = res['users'] as Engineer[]
    });
  }

  getAllConstructors() {
    this.http.get(this.constants.routeURL + '/GetClients').toPromise().then((res: Response) =>{ 
      this.constructors = res['users'] as Client[];
    });
  }
  
  getAllEmployees(){
    this.http.get(this.constants.routeURL + '/GetEmployees').toPromise().then((res: Response) => {
      this.employees = res['users'] as Employee[]
    });
  }
}
