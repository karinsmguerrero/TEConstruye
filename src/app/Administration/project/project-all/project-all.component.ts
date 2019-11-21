import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from 'src/app/Services/project-management.service';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.css']
})
export class ProjectAllComponent implements OnInit {

  constructor(private service: ProjectManagementService) { }

  haveProjects: boolean = true;

  ngOnInit() {
    if (localStorage.getItem('userRole') == 'admin') {
      this.service.getAllProjects();
    } else {
      this.service.getUserProjects(localStorage.getItem('userName'));
    }
    this.haveProjects = !(this.service.projects[0] != null);
    //alert(this.service.projects[0] == null)
  }


}
