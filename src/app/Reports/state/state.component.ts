import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private service : ReportsService) { }

  ngOnInit() {
    this.service.getStateReport();
  }

}
