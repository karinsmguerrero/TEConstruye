import { Component, OnInit } from '@angular/core';
import { Supply } from 'src/app/Models/supply.model';

@Component({
  selector: 'app-list-supplies',
  templateUrl: './list-supplies.component.html',
  styleUrls: ['./list-supplies.component.css']
})
export class ListSuppliesComponent implements OnInit {

  supplyList : Supply[];
  a : Supply =
  {
    Id : 1,
    Name : 'Zinc',
    Price : 1000 
  }
  b : Supply =
  {
    Id : 2,
    Name : 'Madera',
    Price : 5000
  }

  constructor() { }

  ngOnInit() {
    this.supplyList = [this.a, this.b,this.a, this.b,this.a, this.b]
  }

}
