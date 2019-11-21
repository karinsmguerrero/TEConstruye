import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from 'src/app/Services/project-management.service';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.css']
})
export class ProjectAllComponent implements OnInit {

  constructor(private service : ProjectManagementService) { }

  ngOnInit() {
    this.service.getUserProjects(localStorage.getItem('userName'));
  }

}
