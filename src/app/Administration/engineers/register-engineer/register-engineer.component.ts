import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Engineer } from 'src/app/Models/engineer';

@Component({
  selector: 'app-register-engineer',
  templateUrl: './register-engineer.component.html',
  styleUrls: ['./register-engineer.component.css']
})
export class RegisterEngineerComponent implements OnInit {

  engineer: Engineer;
   majors = ['Eléctrico', 'Civil', 'Construcción']

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.engineer = {
      code : '',
      major : '',
      name: '',
      id: null,
      lastnamea: '',
      lastnameb:'',
      telephone: '',
      username: null,
      password: ''
    }
  }

  onSubmit(form: NgForm) {
    this.service.registerEngineer(form.value);
    this.resetForm(form);

  }

}
