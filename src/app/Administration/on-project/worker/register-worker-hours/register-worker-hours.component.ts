import { Component, OnInit } from '@angular/core';
import { EmployeeHours } from 'src/app/Models/employee-hours.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-worker-hours',
  templateUrl: './register-worker-hours.component.html',
  styleUrls: ['./register-worker-hours.component.css']
})
export class RegisterWorkerHoursComponent implements OnInit {
  employeehours:EmployeeHours;
  idstage:number;
  employee:string;
 constructor(private route: ActivatedRoute,
             private serviceUser: UserService,
             private serviceStage:StageProjectManagementService) { }

  ngOnInit() {
    this.serviceUser.getEmployees();
    this.idstage = +this.route.snapshot.paramMap.get('stage');
    this.employee='';
    this.resetProjectForm();
  }

  employeeSelected(username :string){
    this.employee=username;
  }
  
  resetProjectForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeehours = {
      username: '',
      hours: 0
    }
  }

  onSubmit(form: NgForm) {
    this.serviceStage.insertEmployeeHours(form,this.idstage,this.employee);
    this.resetProjectForm(form);
  }


}
