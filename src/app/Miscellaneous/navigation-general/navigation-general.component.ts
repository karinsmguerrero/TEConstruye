import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navigation-general',
  templateUrl: './navigation-general.component.html',
  styleUrls: ['./navigation-general.component.css']
})
export class NavigationGeneralComponent implements OnInit {
  
  constructor(private loginService: LoginService) { }

  logged: boolean;

  ngOnInit() {
    if (localStorage.getItem('userName') != null)
      this.logged = true;
    else
      this.logged = false;
  }

}
