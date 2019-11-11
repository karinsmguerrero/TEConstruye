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
  showcustomer: boolean = false;

  ngOnInit() {
    this.logged = this.loggedIn();
    this.showadmin = this.isAdmin();
    this.showclient = this.isClient();
    this.showcustomer = this.isCustomer();
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

  isCustomer() {
    if (localStorage.getItem('userRole') == 'Costructor')
      return true;
    else
      return false;
  }

  isAdmin() {
    if (localStorage.getItem('userRole') == 'Admin')
      return true;
    else
      return false;
  }
}
