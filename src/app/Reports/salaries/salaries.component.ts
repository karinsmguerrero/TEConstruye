import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  constructor(private service : ReportsService) { }

  year : number = 2019;

  ngOnInit() {
    this.service.getSalariesReport(this.year);
    //alert(this.service.salaryReport[0].week);
  }

}
