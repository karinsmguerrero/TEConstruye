import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employee = {
      Name: '',
      Id: null,
      LastName: '',
      Phone: '',
      Salary : null
    }
  }

  onSubmit(form: NgForm) {
    this.service.registerEmployee(form.value);
    this.resetForm(form);
    /*
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm();
        }
      });*/
  }
}
