import { Component, OnInit } from '@angular/core';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  constructor(private service : StageTypeManagementService) { }

  ngOnInit() {
  }

  refresh(){
    this.service.getStagesType();
  }

}
