import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyService } from 'src/app/Services/property.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property1: Property;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.propertyService.getProperty(id);
    this.propertyService.loadPhotos(id);
    //alert(this.property1.Photos[0].toString());
  }

}
