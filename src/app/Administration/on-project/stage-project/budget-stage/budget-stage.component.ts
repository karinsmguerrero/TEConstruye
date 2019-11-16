import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetManagementService } from 'src/app/Services/budget-management.service';

@Component({
  selector: 'app-budget-stage',
  templateUrl: './budget-stage.component.html',
  styleUrls: ['./budget-stage.component.css']
})
export class BudgetStageComponent implements OnInit {

  idStage:number
  constructor(private route: ActivatedRoute,
    private serviceBudget:BudgetManagementService) { }

  ngOnInit() {
    this.idStage = +this.route.snapshot.paramMap.get('stage');
    this.serviceBudget.getBudgetByStage(this.idStage);
  }



}
