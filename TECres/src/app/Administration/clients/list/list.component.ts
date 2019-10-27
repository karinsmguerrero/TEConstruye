import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientList : Client[];
  amy : Client =
  {
    Name: 'Amy',
    Id: 1,
    LastNames: 'Moore',
    Phone: '88999090',
    UserName : 'Amoore',
    Password: '1234'
  }
  blessy : Client =
  {
    Name: 'Blessy',
    Phone: '78787879',
    Id: 2,
    LastNames: 'Moore',
    UserName : 'Bmoore',
    Password: '1234'
  }

  constructor() { }

  ngOnInit() {
    this.clientList = [this.amy, this.blessy, this.amy, this.blessy, this.amy, this.blessy]
  }

}
