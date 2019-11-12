import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ReportsService } from 'src/app/Services/reports.service';
import { StageBudgetReportLine } from 'src/app/Models/stage-budget-report-line.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private service : ReportsService) { }

  ngOnInit() {
    this.service.getBudgetReport();
  }

}
