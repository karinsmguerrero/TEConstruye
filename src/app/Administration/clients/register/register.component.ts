import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Client } from 'src/app/Models/client';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetClientForm();
  }

  resetClientForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.client = {
      firstname: '',
      id: null,
      lastnamea: '',
      lastnameb: '',
      telephone: null,
      username: '',
      password: ''
    }
  }

  onSubmit(form: NgForm) {
    form.value.password = CryptoJS.enc.Base64.stringify( (CryptoJS.MD5(form.value.password) as unknown) as string);
    this.service.registerClient(form.value);
    this.resetClientForm(form);
  }

}
