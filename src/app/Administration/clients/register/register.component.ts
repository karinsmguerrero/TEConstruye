import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Client } from 'src/app/Models/client';

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
    this.service.registerClient(form.value);
    this.resetClientForm(form);
  }

}
