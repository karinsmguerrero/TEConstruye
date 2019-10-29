import { Injectable } from '@angular/core';
import { Client } from '../Models/client';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[];

  constructor(private http: HttpClient, private constant: ConstantsService, private toastr : ToastrService) { }


  getAllClients() {
    this.http.get(this.constant.routeURL + '/GetConstructors').toPromise().then(res => { 
      this.clients = res as Client[];
     
    }, error => {
      this.toastr.error('Error!', 'No se han podido recuperar los clientes');
    });
    //alert("username 1: " + this.clients[0].UserName);

    
  }

}
