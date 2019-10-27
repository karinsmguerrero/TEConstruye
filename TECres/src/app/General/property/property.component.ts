import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property1 : Property = {
    Name :'Villa flores',
    LotArea: 200,
    BuiltArea : 150,
    Bathroom: 3,
    Rooms : 5,
    Gym : 0,
    Description : 'Hermosa casa nueva con acabados de lujo, en una excelente ubicación, con seguridad',
    Type: 'Casa',
    Location : 'Heredia, San Rafael',
    Floors: 2,
    Parkings:1,
    Price: 60000000,
    Pools: 0,
    Photos: ['./assets/img/property-3.jpg']
  }

  constructor() { }

  ngOnInit() {
  }

}
