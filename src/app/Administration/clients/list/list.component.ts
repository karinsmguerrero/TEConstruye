import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientList : Client[];
 
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllConstructors();
  }

}
