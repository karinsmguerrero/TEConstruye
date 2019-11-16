import { Component, OnInit } from '@angular/core';
import { ProjectAux } from '../Models/project-aux.model';
import { LocationManagementService } from '../Services/location-management.service';
import { SupplyManagementService } from '../Services/supply-management.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  project:ProjectAux;
  province : string;
  canton : string;
  district : string;
  constructor(private serviceLocation : LocationManagementService,
    private serviceSupply:SupplyManagementService) { }

  ngOnInit() {
    this.serviceLocation.getProvince();
    this.serviceSupply.getSupplies(); 
    this.province="";
   this.canton="";
  }

  loadCanton(province : string){
    this.province = province;
    this.serviceLocation.getCanton(province);
    
  }
  loadDistrict(canton : string){
    this.canton= canton;
    this.serviceLocation.getDistrict(this.province,this.canton);
    
  }


}
