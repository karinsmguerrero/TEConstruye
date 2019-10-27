import { Component, OnInit } from '@angular/core';
import { Engineer } from 'src/app/Models/engineer';

@Component({
  selector: 'app-list-engineer',
  templateUrl: './list-engineer.component.html',
  styleUrls: ['./list-engineer.component.css']
})
export class ListEngineerComponent implements OnInit {

  engineerList : Engineer[];
  amy : Engineer =
  {
    Name: 'Amy',
    Id: 1,
    LastNames: 'Moore',
    Phone: '88999090',
    UserName : 'Amoore',
    Password: '1234',
    Code : '1323',
    Major : 'Eléctrico'
  }
  blessy : Engineer =
  {
    Name: 'Blessy',
    Phone: '78787879',
    Id: 2,
    LastNames: 'Moore',
    UserName : 'Bmoore',
    Password: '1234',
    Code : '1232323',
    Major : 'Civil'
  }

  constructor() { }

  ngOnInit() {
    this.engineerList = [this.amy, this.blessy, this.amy, this.blessy]
  }
}
