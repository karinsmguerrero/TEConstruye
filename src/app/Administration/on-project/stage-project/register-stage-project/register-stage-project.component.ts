import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StageProject } from 'src/app/Models/stage-project.model';
import { ActivatedRoute } from '@angular/router';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';

@Component({
  selector: 'app-register-stage-project',
  templateUrl: './register-stage-project.component.html',
  styleUrls: ['./register-stage-project.component.css']
})
export class RegisterStageProjectComponent implements OnInit {


  project:number;
  stage:StageProject;
  stagetype:number;
 constructor(private route: ActivatedRoute,
             private serviceStageType:StageTypeManagementService,
             private serviceStage: StageProjectManagementService) { }

  ngOnInit() {
    this.serviceStageType.getStagesType();
    this.project = +this.route.snapshot.paramMap.get('id');
    this.resetProjectForm();
  }

  stageTypeSelected(id :number){
    this.stagetype=id;
  }
  
  resetProjectForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.stage = {
      stagetype: 0,
      idproject: 0,
      startdate:'',
      enddate:''
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value.startdate)
    this.serviceStage.insertStage(form,this.project,this.stagetype);
    this.resetProjectForm(form);
  }


}
