import { Injectable } from '@angular/core';
import { StageProject } from '../Models/stage-project.model';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { BillItem } from '../Models/bill-item.model';

@Injectable({
  providedIn: 'root'
})
export class StageProjectManagementService {

  
  list : StageProject[];
  
  constructor(private http : HttpClient, 
              private constant: ConstantsService, 
              private toastr :ToastrService) { }
  getStages(idproject:number){
    this.http.get(this.constant.routeURL + '/GetStages?project='+idproject).toPromise().then(res => this.list = res as StageProject[]);
  }

  insertStage(formData:NgForm, project:number,stagetype:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      idproject: project,
      stagetype:  stagetype,
      startdate: formData.value.startdate,
      enddate: formData.value.enddate
    };
    this.http.post(this.constant.routeURL + '/PostStage',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Etapa agregada al proyecto')}, error=> {
        this.toastr.error('Error','Error al registrar etapa');
      }
    );
  }


  
  insertSupply(formData:NgForm,stage:number,supply:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };//formData.value.Supply.id
    var body ={
      idsupply: supply,
      idstage: stage,
      quantity:formData.value.quantity
    };
    this.http.post(this.constant.routeURL + '/PostSupplyProject',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','material agregado a la etapa')}, error=> {
        this.toastr.error('Error','Error al registrar material');
      }
    );
  }



  insertEmployeeHours(formData:NgForm,stage:number,employee:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      username: employee,
      idstage:  stage,
      hours: formData.value.hours
    };
    this.http.post(this.constant.routeURL + '/PostWorkerProject',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Empleado agregado a la etapa')}, error=> {
        this.toastr.error('Error','Error al registrar empleado');
      }
    );

  }


  insertExpenses(formData:NgForm, idstage:number,items:BillItem[] ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      idstage : idstage,
      provider : formData.value.provider,
      billphoto : formData.value.provider+'_'+formData.value.billnumber+'.png',
      billnumber :formData.value.billnumber,
      items: items
    };
    this.http.post(this.constant.routeURL + '/PostExpense',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Factura agregada a la etapa')}, error=> {
        this.toastr.error('Error','Error al registrar gasto');
      }
    );
  }
}
