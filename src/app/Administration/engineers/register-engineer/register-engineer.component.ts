import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Engineer } from 'src/app/Models/engineer';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register-engineer',
  templateUrl: './register-engineer.component.html',
  styleUrls: ['./register-engineer.component.css']
})
export class RegisterEngineerComponent implements OnInit {

  engineer: Engineer;
  selectedMajor: string;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.service.getSpecialties();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.engineer = {
      code: '',
      major: '',
      name: '',
      id: null,
      lastnamea: '',
      lastnameb: '',
      telephone: '',
      username: null,
      password: ''
    }
  }

  onSubmit(form: NgForm) {
    form.value.password = CryptoJS.enc.Base64.stringify((CryptoJS.MD5(form.value.password) as unknown) as string);
    this.service.registerEngineer(form.value);
    this.resetForm(form);

  }

}
