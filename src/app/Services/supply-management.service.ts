import { Injectable } from '@angular/core';
import { Supply } from '../Models/supply.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SupplyManagementService {

  list : Supply[];
  
  constructor(private http : HttpClient, private constant: ConstantsService) { }
  getSupplies(){
    this.http.get(this.constant.routeURL + '/GetSupplies').toPromise().then(res => this.list = res as Supply[]);
  }

  insertSupply(formData:NgForm){
    console.log("Name "+formData.value.Name);
    console.log("Price "+formData.value.Description);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name:  formData.value.Name,
      price: formData.value.Price
    };
    this.http.post(this.constant.routeURL + '/PostSupply',body,httpOptions).toPromise();
    
  }
}
