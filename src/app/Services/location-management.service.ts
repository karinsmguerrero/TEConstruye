import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Province } from '../Models/province.model';
import { District } from '../Models/district.model';
import { Canton } from '../Models/canton.model';

@Injectable({
  providedIn: 'root'
})
export class LocationManagementService {

  provinceList : Province[];
  cantonList : Canton[];
  districtList : District[];
  constructor(private http : HttpClient, private constant: ConstantsService) { }

  getProvince(){
    this.http.get(this.constant.routeURL + '/GetProvince').toPromise().then(res => this.provinceList = res as Province[]);
  }
  getCanton(province:string){
    this.http.get(this.constant.routeURL + '/GetCanton/?Province='+province).toPromise().then(res => this.cantonList = res as Canton[]);
  }
  
  getDistrict(province:string, canton:string){
    this.http.get(this.constant.routeURL + '/GetDistrict/?Province='+province+'&Canton='+canton).toPromise().then(res => this.districtList = res as District[]);
  }
}
