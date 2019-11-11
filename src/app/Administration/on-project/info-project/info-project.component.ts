import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from 'src/app/Services/project-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.css']
})
export class InfoProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute,private serviceProject:ProjectManagementService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceProject.getProject(id);
  }

}
