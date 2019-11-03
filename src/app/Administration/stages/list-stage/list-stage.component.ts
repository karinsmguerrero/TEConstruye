import { Component, OnInit } from '@angular/core';
import { Stage } from '../../../Models/stage.model';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';

@Component({
  selector: 'app-list-stage',
  templateUrl: './list-stage.component.html',
  styleUrls: ['./list-stage.component.css']
})
export class ListStageComponent implements OnInit {

  constructor(private serviceStageType:StageTypeManagementService) { }

  ngOnInit() {
    this.serviceStageType.getStagesType();
  }

}
