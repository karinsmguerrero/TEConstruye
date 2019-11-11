import { Component, OnInit } from '@angular/core';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';
import { StageData } from 'src/app/Models/stage-data';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Models/employee';
import { Project } from 'src/app/Models/project';

@Component({
  selector: 'app-register-hours',
  templateUrl: './register-hours.component.html',
  styleUrls: ['./register-hours.component.css']
})
export class RegisterHoursComponent implements OnInit {

  stageSelected : StageData;
  employeeSelected : Employee;
  projectSelected : Project;

  constructor(private stageService : StageTypeManagementService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit() {

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.stageSelected = {
        name : ''
      }
      this.employeeSelected = {
        firstname : '',
        lastnamea : '',
        lastnameb : '',
        id : null,
        salary :  null,
        telephone : null
      }
      this.projectSelected = {
        id : null
      }
  }

}
