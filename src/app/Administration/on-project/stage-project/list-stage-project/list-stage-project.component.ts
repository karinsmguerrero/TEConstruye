import { Component, OnInit } from '@angular/core';
import { StageProjectManagementService } from 'src/app/Services/stage-project-management.service';
import { StageProject } from 'src/app/Models/stage-project.model';
import { ActivatedRoute } from '@angular/router';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';

@Component({
  selector: 'app-list-stage-project',
  templateUrl: './list-stage-project.component.html',
  styleUrls: ['./list-stage-project.component.css']
})
export class ListStageProjectComponent implements OnInit {
  id:number
  constructor(private route: ActivatedRoute,
              private serviceStageType:StageTypeManagementService, 
              private serviceStage:StageProjectManagementService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.serviceStage.getStages(this.id);
  }

}
