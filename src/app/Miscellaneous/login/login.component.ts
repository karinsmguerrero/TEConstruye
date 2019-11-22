import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  
  ngOnInit() {
  }

  onSubmit(username : string, password : string){
    var pass = (CryptoJS.MD5(password) as unknown) as string;
    this.loginService.login(username,CryptoJS.enc.Base64.stringify(pass)); 
    //this.loginService.login(username, password);
  }

}
