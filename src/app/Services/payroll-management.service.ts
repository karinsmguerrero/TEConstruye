import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { ToastrService } from 'ngx-toastr';
import { Payroll } from '../Models/payroll.model';

@Injectable({
  providedIn: 'root'
})
export class PayrollManagementService {
  listPayrollStage: Payroll[];
  constructor(private http : HttpClient, 
    private constant: ConstantsService,
    private toastr :ToastrService) { }

    getPayrollByStage(stage:number){
      this.http.get(this.constant.routeURL + '/GetPayrollStage?stage='+stage).toPromise().then(res => this.listPayrollStage = res as Payroll[]);
    }
}
