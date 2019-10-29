import { Injectable } from '@angular/core';
import { Property } from '../Models/property';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  properties: Property[];
  photos: string[];

  selectedProperty: Property;

  constructor(private http: HttpClient, private constant: ConstantsService) {
  }

  getProperty(id: number) {
    this.http.get(this.constant.routeURL + '/GetPropiedad/' + id).toPromise().then(res => this.selectedProperty = (res as Property[])[0]);
    //this.loadPhotos(id);
  }

  getAllProperties() {
    this.http.get(this.constant.routeURL + '/GetPropiedades').toPromise().then(res => this.properties = res as Property[]);
  }

  loadPhotos(id : number){
    this.http.get(this.constant.routeURL + '/GetFotos/' + id).toPromise().then(res => this.photos = res as string[]);
  }
}
