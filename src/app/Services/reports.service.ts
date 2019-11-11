import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';
import { BudgetLine } from '../Models/budget-line.model';
import { StageData } from '../Models/stage-data';
import { StageBudgetReportLine } from '../Models/stage-budget-report-line.model';
import { StateReportLine } from '../Models/state-report-line.model';
import { StateLine } from '../Models/state-line.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  projects: StageData[];
  stateprojects: StageData[];
  //Reporte de presupuestos
  budgetLines: BudgetLine[];
  report: StageBudgetReportLine[] = [];
  //Reporte de presupustos vs gastos
  statereport : StateReportLine[] = [];
  stateLines: StateLine[] = [];

  constructor(private http: HttpClient, private constant: ConstantsService) { }

  getBudgetReport() {
    this.projects = [];
    this.report = [];
    this.budgetLines = [];
    this.http.get(this.constant.routeURL + '/GetProjectWithBudget').toPromise().then((res: Response) => {
      this.projects = res['result'] as StageData[];
      this.loadBudget(this.projects);
    });

  }

  loadBudget(projects: StageData[]) {
    projects.forEach(project => {
      this.http.get(this.constant.routeURL + '/GetStageBudget/' + project.name).toPromise().then((res: Response) => {
        var line = new StageBudgetReportLine();
        line.project = project.name;
        line.lines = res['result'] as BudgetLine[];
        this.report.push(line);
      });
    });
  }

  getStateReport(){
    this.stateprojects = [];
    this.statereport = [];
    this.stateLines = [];
    this.http.get(this.constant.routeURL + '/GetProjectWithBudgetAndExpenses').toPromise().then((res: Response) => {
      this.stateprojects = res['result'] as StageData[];
      this.loadState(this.stateprojects);
    });
  }

  loadState(projects: StageData[]){
    projects.forEach(project => {
      this.http.get(this.constant.routeURL + '/GetStageExpensesBudget/' + project.name).toPromise().then((res: Response) => {
        var line = new StateReportLine();
        line.project = project.name;
        line.lines = res['result'] as StateLine[];
        this.statereport.push(line);
      });
    });
  }

}
