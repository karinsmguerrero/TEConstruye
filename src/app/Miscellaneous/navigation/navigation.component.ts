import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  logged: boolean = false;
  showclient: boolean = false;
  showadmin: boolean = false;
  showengineer: boolean = false;

  ngOnInit() {
    this.logged = this.loggedIn();
    this.showadmin = this.isAdmin();
    this.showclient = this.isClient();
    this.showengineer = this.isEngineer();
  }

  loggedIn() {
    if (localStorage.getItem('userName') != null)
      return true;
    else
      return false;
  }

  isClient() {
    if (localStorage.getItem('userRole') != 'Constructor' && localStorage.getItem('userRole') != 'Admin' && this.loggedIn())
      return true;
    else
      return false;
  }

  isEngineer() {
    if (localStorage.getItem('userRole') == 'engineer')
      return true;
    else
      return false;
  }

  isAdmin() {
    if (localStorage.getItem('userRole') == 'admin')
      return true;
    else
      return false;
  }
}
