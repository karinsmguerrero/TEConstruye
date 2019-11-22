import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../Models/project.model';
import { ProjectTecres } from '../Models/project-tecres.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {
  list : Project[];
  onProject: Project;
  projectTec:ProjectTecres;
  projects : Project[] = [];
  
  constructor(private http : HttpClient, private constant: ConstantsService,private toastr :ToastrService) { }

  getProjects(){
    this.http.get(this.constant.routeURL + '/GetProjects').toPromise().then(res => this.list = res as Project[]);
  }
  getProject(id:number){
    this.http.get(this.constant.routeURL + '/GetProject?id='+id).toPromise().then((res: Response) => {
      this.onProject = res['project'][0] as Project
    });
  }

  getProjectTec(id:number){
    this.http.get(this.constant.routeURL + '/GetProjectTec?id='+id).toPromise().then((res: Response) => {
      this.projectTec = res['project'][0] as ProjectTecres
    });
  }
  getUserProjects(username : string){
    this.http.get(this.constant.routeURL + '/GetUserProject/' + username).toPromise().then((res: Response) => {
      this.projects = res['project'] as Project[];
    });
  }

  getAllProjects(){
    this.http.get(this.constant.routeURL + '/GetAllProjects').toPromise().then(res => {
      this.projects = res as Project[];
    });
  }

  insertProject(formData:NgForm, 
                province:string, canton:string, district:string){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name: formData.value.name,
      lotarea:  formData.value.lotarea,
      builtarea: formData.value.builtarea,
      rooms:formData.value.rooms,
      restrooms:formData.value.restrooms,
      floors:formData.value.floors,
      client:localStorage.getItem('userName'),
      province:province,
      canton:canton,
      district:district
    };
    this.http.post(this.constant.routeURL + '/PostProject',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Proyecto agregado')}, error=> {
        this.toastr.error('Error','Error al registrar proyecto');
      }
    );
  }
}
