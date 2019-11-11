import { Injectable } from '@angular/core';
import { StageProject } from '../Models/stage-project.model';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StageProjectManagementService {

  
  list : StageProject[];
  
  constructor(private http : HttpClient, private constant: ConstantsService, private toastr :ToastrService) { }
  getStages(idproject:number){
    this.http.get(this.constant.routeURL + '/GetStages?project='+idproject).toPromise().then(res => this.list = res as StageProject[]);
  }

  insertStage(formData:NgForm, project:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      idproject: project,
      stagetype:  formData.value.StageType,
      startdate: formData.value.StartDate,
      enddate: formData.value.EndDate
    };
    this.http.post(this.constant.routeURL + '/PostStage',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Etapa agregada al proyecto')}, error=> {
        this.toastr.error('Error','Error al registrar etapa');
      }
    );
  }
}