import { Injectable } from '@angular/core';
import { Supply } from '../Models/supply.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SupplyStage } from '../Models/supply-stage.model';

@Injectable({
  providedIn: 'root'
})
export class SupplyManagementService {

  list : Supply[];
  listSupplyStage : SupplyStage[];
  constructor(private http : HttpClient, 
              private constant: ConstantsService,
              private toastr :ToastrService) { }
  getSupplies(){
    this.http.get(this.constant.routeURL + '/GetSupplies').toPromise().then(res => this.list = res as Supply[]);
  }

  insertSupply(formData:NgForm){
    console.log("Name "+formData.value.Name);
    console.log("Price "+formData.value.Price);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name:  formData.value.Name,
      price: formData.value.Price
    };
    this.http.post(this.constant.routeURL + '/PostSupply',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Material agregado')}, error=> {
        this.toastr.error('Error','Error al registrar material');
      }
    );
  }

  getSupplyStage(id:number){
    this.http.get(this.constant.routeURL + '/GetSuppliesStage?id='+id).toPromise().then(res => this.listSupplyStage = res as SupplyStage[]);  
  }
}
