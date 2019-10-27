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

  constructor(private http: HttpClient, private constants : ConstantsService, private toastr: ToastrService) { }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar usuarios nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
  registerClient(user: Client) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Phone: user.Phone,
      Name: user.Name,
      LastNames: user.LastNames,
      Id : user.Id
    }
    this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
   // return this.http.post(this.constants.routeURL + '/api/User/Register', body);
  }

  /*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar empleados nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
 registerEmployee(user: Employee) {
  const body = {
    Phone: user.Phone,
    Name: user.Name,
    LastName: user.LastName,
    Id : user.Id,
    Salary : user.Salary
  }
  this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
 // return this.http.post(this.constants.routeURL + '/api/User/Register', body);
}

/*
  Código tomado de: https://www.youtube.com/watch?v=e8BlURn6SFk&t=135s
  Objetivo: registrar empleados nuevos
  Parámetros: user : User => objeto de tipo User que contiene los datos del usuario
  */
 registerEngineer(user: Engineer) {
  const body = {
    Phone: user.Phone,
    Name: user.Name,
    LastName: user.LastNames,
    Id : user.Id,
    Code : user.Code,
    Major : user.Major,
    UserName : user.UserName,
    Password : user.Password
  }
  this.toastr.success('Éxito!', 'Usuario registrado exitosamente');
 // return this.http.post(this.constants.routeURL + '/api/User/Register', body);
}
}
