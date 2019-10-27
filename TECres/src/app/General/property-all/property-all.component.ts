import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';

@Component({
  selector: 'app-property-all',
  templateUrl: './property-all.component.html',
  styleUrls: ['./property-all.component.css']
})
export class PropertyALLComponent implements OnInit {

  properties : Property[];

  property1 : Property = {
    Name :'Villa flores',
    LotArea: 200,
    BuiltArea : 150,
    Bathroom: 3,
    Rooms : 5,
    Gym : 0,
    Description : 'Hermosa casa',
    Type: 'Casa',
    Location : 'Heredia, San Rafael',
    Floors: 2,
    Parkings:1,
    Price: 60000000,
    Pools: 0,
    Photos: ['./assets/img/property-3.jpg']
  }

  property2 : Property = {
    Name :'Residencia Otoya',
    LotArea: 250,
    BuiltArea : 250,
    Bathroom: 3,
    Rooms : 4,
    Gym : 0,
    Description : 'Hermosa casa',
    Type: 'Casa',
    Location : 'San José, San Rafael',
    Floors: 1,
    Parkings:2,
    Price: 50000000,
    Pools: 0,
    Photos: ['./assets/img/property-1.jpg']
  }

  property3 : Property = {
    Name :'Casa lagos azules',
    LotArea: 250,
    BuiltArea : 120,
    Bathroom: 2.5,
    Rooms : 4,
    Gym : 1,
    Description : 'Hermosa casa',
    Type: 'Casa',
    Location : 'San José, San Rafael',
    Floors: 1,
    Parkings: 3,
    Price: 65000000,
    Pools: 1,
    Photos: ['./assets/img/property-2.jpg']
  }

  constructor() { }

  ngOnInit() {
    this.properties = [this.property1, this.property2, this.property3, this.property2]
  }

}
