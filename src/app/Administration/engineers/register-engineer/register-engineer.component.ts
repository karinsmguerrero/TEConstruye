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
      Code : '',
      Major : '',
      Name: '',
      Id: null,
      LastNames: '',
      Phone: '',
      UserName: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {
    this.service.registerEngineer(form.value);
    this.resetForm(form);
    /*
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm();
        }
      });*/
  }

}
