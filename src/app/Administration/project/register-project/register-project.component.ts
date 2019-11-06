import { Component, OnInit } from '@angular/core';
import { LocationManagementService } from 'src/app/Services/location-management.service';
import { ProjectManagementService } from 'src/app/Services/project-management.service';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  province : string;
  canton : string;
  district : string;
  constructor(private serviceLocation : LocationManagementService, 
    private serviceProject: ProjectManagementService) { }

  ngOnInit() {
    //this.serviceLocation.getProvince();
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
