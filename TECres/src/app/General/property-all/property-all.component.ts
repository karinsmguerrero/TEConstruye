import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/Services/property.service';

@Component({
  selector: 'app-property-all',
  templateUrl: './property-all.component.html',
  styleUrls: ['./property-all.component.css']
})
export class PropertyALLComponent implements OnInit {

  properties : Property[];

  constructor(private propertyService : PropertyService) { }

  ngOnInit() {
    this.propertyService.getAllProperties();
  }

}
