import { Injectable } from '@angular/core';
import { Property } from '../Models/property.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ConstantsService } from './constants.service';
import { ProjectTecres } from '../Models/project-tecres.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TecresManagementService {

  property:Property;
  constructor(private http : HttpClient, 
              private constant: ConstantsService,
              private toastr :ToastrService) { }
  
  /*getPropertyType(){
    this.http.get(this.constant.routeURL + '/GetProject?id='+id).toPromise().then((res: Response) => {
      this.onProject = res['project'][0] as Project
    });
  }*/

  
  insertProperty(formData:NgForm,project:ProjectTecres){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var body ={
      name: project.name,
      lotarea:  project.lotarea,
      builtarea: project.builtarea,
      rooms:project.rooms,
      restrooms:project.restrooms,
      floors:project.floors,
      client:project.client,
      location:project.idlocation,
      guestparking: formData.value.guestparking,
      pools: formData.value.pools,
      parking:formData.value.parkings,
      price: formData.value.price,
      gym: formData.value.gym
    };
    this.http.post(this.constant.routeURL + '/PostTECres',body,httpOptions).subscribe(res =>{
      this.toastr.success('Successfull','Propiedad agregada')}, error=> {
        this.toastr.error('Error','Error al registrar propiedad');
      }
    );
  }
}
