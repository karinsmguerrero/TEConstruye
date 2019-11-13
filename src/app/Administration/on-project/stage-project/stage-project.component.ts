import { Component, OnInit } from '@angular/core';
import { StageProject } from 'src/app/Models/stage-project.model';
import { ActivatedRoute } from '@angular/router';
import { StageTypeManagementService } from 'src/app/Services/stage-type-management.service';

@Component({
  selector: 'app-stage-project',
  templateUrl: './stage-project.component.html',
  styleUrls: ['./stage-project.component.css']
})
export class StageProjectComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
