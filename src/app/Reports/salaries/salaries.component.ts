import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  constructor(private service : ReportsService) { }

  year : number;

  
  ngOnInit() {
    this.service.getSalariesYears();
  }

  loadReport(){
    this.service.getSalariesReport(this.year);
  }

}
