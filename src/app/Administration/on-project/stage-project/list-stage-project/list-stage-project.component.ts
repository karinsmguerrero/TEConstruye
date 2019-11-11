import { Component, OnInit } from '@angular/core';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';
import { StageProject } from 'src/app/Models/stage-project.model';

@Component({
  selector: 'app-list-stage-project',
  templateUrl: './list-stage-project.component.html',
  styleUrls: ['./list-stage-project.component.css']
})
export class ListStageProjectComponent implements OnInit {

  constructor(private serviceStageType:StageProjectManagementService) { }

  ngOnInit() {
    this.serviceStageType.getStages(4);
  }

  //Ver más detalles de la etapa seleccionada
  viewMore(stage:StageProject){

  }

}
