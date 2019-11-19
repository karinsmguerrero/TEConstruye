import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpClient } from '@angular/common/http';
import { BudgetLine } from '../Models/budget-line.model';
import { StageData } from '../Models/stage-data';
import { StageBudgetReportLine } from '../Models/stage-budget-report-line.model';
import { StateReportLine } from '../Models/state-report-line.model';
import { StateLine } from '../Models/state-line.model';
import { StateTotalLine } from '../Models/state-total-line.model';
import { SalariesLine } from '../Models/salaries-line.model';
import { EmployeeSalaryLine } from '../Models/employee-salary-line.model';
import { SalariesReportLine } from '../Models/salaries-report-line.model';
import { Week } from '../Models/week.model';
import { EmployeeName } from '../Models/employee-name.model';

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
  statereport: StateReportLine[] = [];
  stateLines: StateLine[] = [];
  totals: StateTotalLine;
  //Reporte de planilla
  weeks : Week[];
  employees : EmployeeName[];
  salaryReport : SalariesReportLine[];
  line : SalariesReportLine;

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

  getSalariesReport(year : number){
    this.salaryReport = [];
    this.employees = [];
    this.weeks = [];
    this.http.get(this.constant.routeURL + '/GetWeeks/' + year).toPromise().then((res: Response) => {
      this.weeks = res['weeks'] as Week[];
      this.loadEmployees(year, this.weeks);
      //alert(this.weeks[0].week);
    });
    //alert(this.weeks[0].week);
   // alert(this.salaryReport[0].week)
  
  }

  loadEmployees(year : number, weeks : Week[]){
    this.employees = [];
    weeks.forEach(week => {
      //alert("week: " + week.week);
      this.line = new SalariesReportLine();
      this.line.week = week.week;
      this.http.get(this.constant.routeURL + '/GetEmployees/' + year + '/' + week.week).toPromise().then((res: Response) => {
        this.employees = res['employees'] as EmployeeName[];
        this.loadSalaryLines(this.employees, year, this.line);
      });
    });
  }

  loadSalaryLines(employees: EmployeeName[], year : number, week : SalariesReportLine) {
    this.line.employeesToPay = [];
    employees.forEach(employee => {
      //alert("employee: " + employee.name);
      this.http.get(this.constant.routeURL + '/GetSalaryLines/' + year + '/' + week.week + '/' + employee.name).toPromise().then((res: Response) => {
        var EmployeeToPay = new EmployeeSalaryLine();
        EmployeeToPay.name = employee.name;
        EmployeeToPay.salaryLines = res['lines'] as SalariesLine[];
        this.line.employeesToPay.push(EmployeeToPay);
        //alert(EmployeeToPay.name);    
      }); 
    });
    this.salaryReport.push(this.line); 
  }

  getStateReport() {
    this.stateprojects = [];
    this.statereport = [];
    this.stateLines = [];
    this.http.get(this.constant.routeURL + '/GetProjectWithBudgetAndExpenses').toPromise().then((res: Response) => {
      this.stateprojects = res['result'] as StageData[];
      this.loadState(this.stateprojects);
    });
  }

  loadState(projects: StageData[]) {
    projects.forEach(project => {
      this.http.get(this.constant.routeURL + '/GetStageExpensesBudget/' + project.name).toPromise().then((res: Response) => {
        var line = new StateReportLine();
        line.project = project.name;
        line.lines = res['result'] as StateLine[];
        line.totals = res['totals'][0] as StateTotalLine;
        //alert(line.project + ": " + line.totals.total_budget);
        this.statereport.push(line);
      });
    });
  }

  loadTotals(project: string) : StateTotalLine {
    var totals = new StateTotalLine;
    this.http.get(this.constant.routeURL + '/GetReportTotals/' + project).toPromise().then((res: Response) => {
      //alert(res['result'][0].total_budget);
      totals = res['result'][0] as StateTotalLine;
      //alert(this.totals.total_budget);
    });
    return totals;
  }

}
