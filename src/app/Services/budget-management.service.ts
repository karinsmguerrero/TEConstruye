import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { ToastrService } from 'ngx-toastr';
import { Budget } from '../Models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetManagementService {

  budget: Budget;
  
  constructor(private http : HttpClient, 
              private constant: ConstantsService,
              private toastr :ToastrService) { }
  
  getBudgetByStage(id:number){
    this.http.get(this.constant.routeURL + '/GetBudget?stage='+id).toPromise().then((res: Response) => {
      this.budget = res[0] as Budget
    });
  }
}
