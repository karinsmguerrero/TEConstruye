import { Component, OnInit } from '@angular/core';
import { Engineer } from 'src/app/Models/engineer';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-engineer',
  templateUrl: './list-engineer.component.html',
  styleUrls: ['./list-engineer.component.css']
})
export class ListEngineerComponent implements OnInit {

  engineerList : Engineer[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllEngineers();
  }
}
