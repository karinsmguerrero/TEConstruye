import { Injectable } from '@angular/core';
import { Stage } from '../Models/stage.model';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StageTypeManagementService {
 
    
  list : Stage[];
  
  constructor(private http : HttpClient, private constant: ConstantsService) { }
  getStagesType(){
    this.http.get(this.constant.routeURL + '/GetStagesType').toPromise().then(res => this.list = res as Stage[]);
  }

  insertStage(formData:NgForm){
    console.log("Name "+formData.value.Name);
    console.log("Description "+formData.value.Description);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name:  formData.value.Name,
      description: formData.value.Description
    };
    this.http.post(this.constant.routeURL + '/PostStageType',body,httpOptions).toPromise();
    
  }
}
