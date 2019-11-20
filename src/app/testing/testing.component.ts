import { Component, OnInit } from '@angular/core';
import { ProjectAux } from '../Models/project-aux.model';
import { LocationManagementService } from '../Services/location-management.service';
import { SupplyManagementService } from '../Services/supply-management.service';
import { NgForm } from '@angular/forms';
import { ProjectManagementService } from '../Services/project-management.service';
import { TecresManagementService } from '../Services/tecres-management.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectTecres } from '../Models/project-tecres.model';
import { Property } from '../Models/property.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  property:Property;
  idproject:number;
  project:ProjectTecres;
  constructor(private route: ActivatedRoute,
              private serviceProperty: TecresManagementService,
              private serviceProject: ProjectManagementService) { }

  ngOnInit() {
    //this.idproject = +this.route.snapshot.paramMap.get('id');
    //this.serviceProject.getProjectTec(this.idproject);
    this.serviceProject.getProjectTec(3);
    this.project=this.serviceProject.projectTec;
  }
 
}
