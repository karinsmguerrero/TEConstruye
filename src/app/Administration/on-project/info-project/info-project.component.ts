import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from 'src/app/Services/project-management.service';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.css']
})
export class InfoProjectComponent implements OnInit {

  constructor(private serviceProject:ProjectManagementService) { }

  ngOnInit() {
    this.serviceProject.getProject(4);
  }

}
