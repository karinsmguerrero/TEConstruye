import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from 'src/app/Services/project-management.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  constructor(private serviceProject:ProjectManagementService) { }

  ngOnInit() {
    this.serviceProject.getProjects();
  }

}
