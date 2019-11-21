import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navigation-engineer',
  templateUrl: './navigation-engineer.component.html',
  styleUrls: ['./navigation-engineer.component.css']
})
export class NavigationEngineerComponent implements OnInit {

  user : string;
  space = "   "

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = localStorage.getItem('userName');
  }

}
