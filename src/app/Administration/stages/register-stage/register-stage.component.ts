import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';
import { StageType } from 'src/app/Models/stage-type.model';

@Component({
  selector: 'app-register-stage',
  templateUrl: './register-stage.component.html',
  styleUrls: ['./register-stage.component.css']
})
export class RegisterStageComponent implements OnInit {
  stage:StageType;

  constructor(private serviceStageType: StageTypeManagementService) { }

  ngOnInit() {
    this.resetStageForm();
    //this.serviceStageType.getStagesType();
    
  }

  resetStageForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.stage = {
      name: '',
      description: ''
    }
  }

  onSubmit(form: NgForm) {
    this.serviceStageType.insertStage(form);
    this.resetStageForm(form);
  }

}
