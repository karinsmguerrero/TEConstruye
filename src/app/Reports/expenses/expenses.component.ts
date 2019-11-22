import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  year : number;

  constructor(private service : ReportsService) { }

  ngOnInit() {
    this.service.getExpensesYears();
  }

  loadReport(){
    this.service.getExpensesReport(this.year);
  }
}
