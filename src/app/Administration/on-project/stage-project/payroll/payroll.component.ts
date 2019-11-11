import { Component, OnInit } from '@angular/core';
import { PayrollManagementService } from 'src/app/Services/payroll-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  idStage:number
  constructor(private route: ActivatedRoute,
    private servicePayroll:PayrollManagementService) { }

  ngOnInit() {
    this.idStage = +this.route.snapshot.paramMap.get('stage');
    this.servicePayroll.getPayrollByStage(this.idStage);
  }

}
