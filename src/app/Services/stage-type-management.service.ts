import { Injectable } from '@angular/core';
import { Stage } from '../Models/stage.model';
import { ConstantsService } from './constants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StageData } from '../Models/stage-data';
import { Employee } from '../Models/employee';
import { Project } from '../Models/project';

@Injectable({
  providedIn: 'root'
})
export class StageTypeManagementService {

  list: Stage[];
  types: StageData[];
  employees : Employee[];
  projects : Project[];
  constructor(private http: HttpClient, private constant: ConstantsService) { }

  getTypes() {
    this.http.get(this.constant.routeURL + '/GetStages').toPromise().then((res: Response) => {
      this.types = res['users'] as StageData[];
    });
  }

  
  getEmployees() {
    this.http.get(this.constant.routeURL + '/GetEmployees').toPromise().then((res: Response) => {
      this.employees = res['users'] as Employee[];
    });
  }

  getProjects() {
    this.http.get(this.constant.routeURL + '/GetProjects').toPromise().then((res: Response) => {
      this.projects = res['result'] as Project[];
    });
  }

  getStagesType() {
    this.http.get(this.constant.routeURL + '/GetStagesType').toPromise().then(res => this.list = res as Stage[]);
  }

  insertStage(formData: NgForm) {
    console.log("Name " + formData.value.Name);
    console.log("Description " + formData.value.Description);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var body = {
      name: formData.value.Name,
      description: formData.value.Description
    };
    this.http.post(this.constant.routeURL + '/PostStageType', body, httpOptions).toPromise();

  }
}
