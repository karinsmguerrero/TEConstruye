import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from 'src/app/Models/property.model';
import { TecresManagementService } from 'src/app/Services/tecres-management.service';
import { ProjectManagementService } from 'src/app/Services/project-management.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectTecres } from 'src/app/Models/project-tecres.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property:Property;
  idproject:number;
  project:ProjectTecres;
  constructor(private route: ActivatedRoute,
              private serviceProperty: TecresManagementService,
              private serviceProject: ProjectManagementService) { }

  ngOnInit() {
    this.resetPropertyForm();
    this.idproject = +this.route.snapshot.paramMap.get('id');
    //this.serviceProject.getProjectTec(this.idproject);
    this.serviceProject.getProjectTec(this.idproject);
    this.project=this.serviceProject.projectTec;
  }
 

  resetPropertyForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.property = {
      name: '', //Ok
      rooms: 0, //Ok
      restroom: 0, //Ok
      guestparking: false,
      lotarea: 0, //Ok
      builtarea: 0, //OK
      pools: false,
      parking: false,
      price: 0, 
      gym: false,
      location: 1,
      floors : 1, //Ok
      client:''//Ok
    }
  }

  onSubmit(form: NgForm) {
    this.serviceProperty.insertProperty(form,this.serviceProject.projectTec);
    this.resetPropertyForm(form);
  }

}
