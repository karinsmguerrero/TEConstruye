import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class LocationManagementService {

  provinceList : string[];
  cantonList : string[];
  districtList : string[];
  constructor(private http : HttpClient, private constant: ConstantsService) { }

  getProvince(){
    this.http.get(this.constant.routeURL + '/GetProvince').toPromise().then(res => this.provinceList = res as string[]);
  }
  getCanton(province:string){
    this.http.get(this.constant.routeURL + '/GetCanton/?Province='+province).toPromise().then(res => this.cantonList = res as string[]);
  }
  
  getDistrict(province:string, canton:string){
    this.http.get(this.constant.routeURL + '/GetCanton/?Province='+province+'&Canton='+canton).toPromise().then(res => this.districtList = res as string[]);
  }
}
