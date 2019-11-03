import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})
export class EngineersComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  refresh(){
    this.userService.getAllConstructors();
  }


}
