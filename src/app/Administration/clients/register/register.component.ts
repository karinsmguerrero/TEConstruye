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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  showSeller: Boolean = false;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetClientForm();
  }

  resetClientForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.client = {
      Name: '',
      Id: null,
      LastNames: '',
      Phone: '',
      UserName: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {
    this.service.registerClient(form.value);
    this.resetClientForm(form);
    /*
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm();
        }
      });*/
  }

}
