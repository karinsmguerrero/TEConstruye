import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../Models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {
  list : Project[];
  onProject: Project;
  
  constructor(private http : HttpClient, private constant: ConstantsService,private toastr :ToastrService) { }
  getProjects(){
    this.http.get(this.constant.routeURL + '/GetProjects').toPromise().then(res => this.list = res as Project[]);
  }
  getProject(id:number){
    this.http.get(this.constant.routeURL + '/GetProject?id='+id).toPromise().then((res: Response) => {
      this.onProject = res['project'][0] as Project
    });
  }

  insertProject(formData:NgForm){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name: formData.value.name,
      lotarea:  formData.value.LotArea,
      builtarea: formData.value.BuiltArea,
      rooms:formData.value.Rooms,
      restrooms:formData.value.Restrooms,
      floors:formData.value.Floors,
      client:localStorage.getItem('userName'),
      province:formData.value,
      canton:formData.value,
      district:formData.value
    };
    this.http.post(this.constant.routeURL + '/PostProject',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Proyecto agregado')}, error=> {
        this.toastr.error('Error','Error al registrar proyecto');
      }
    );
  }
}
