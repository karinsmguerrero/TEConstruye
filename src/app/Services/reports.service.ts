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
import { ExpensesReportLine } from '../Models/expenses-report-line.model';
import { ExpensesLine } from '../Models/expenses-line.model';
import { Year } from '../Models/year.model';

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
  salaryReport: SalariesReportLine[];
  //Reporte de gastos
  expensesReport : ExpensesReportLine[];
  //Años
  expensesYear : Year[] = [];
  salaryYear : Year[] = [];

  constructor(private http: HttpClient, private constant: ConstantsService) { }

  getExpensesYears(){
    this.http.get(this.constant.routeURL + '/GetYearsForExpenses').toPromise().then((res: Response) => {
      this.expensesYear = res['years'] as Year[];
    });
  }

  getSalariesYears(){
    this.http.get(this.constant.routeURL + '/GetYearsForSalaries').toPromise().then((res: Response) => {
      this.salaryYear = res['years'] as Year[];
    });
  }

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

  getExpensesReport(year : number) {
    this.expensesReport = [];
    this.http.get(this.constant.routeURL + '/GetWeeksForExpenses/' + year).toPromise().then((res: Response) => {
      var weeks = res['weeks'] as Week[];
      this.loadExpenses(weeks, year);
    });
  }

  loadExpenses(weeks: Week[], year : number) {
    weeks.forEach(week => {
      //alert("week: " + week.week);
      this.http.get(this.constant.routeURL + '/GetExpersesPerWeek/' + year + '/' + week.week).toPromise().then((res: Response) => {
        var mainLine = new ExpensesReportLine();
        mainLine.week = week.week;
        mainLine.lines =  res['lines'] as ExpensesLine[];
        this.expensesReport.push(mainLine);
      });
    });
  }

  getSalariesReport(year: number) {
    this.salaryReport = [];
    this.http.get(this.constant.routeURL + '/GetWeeks/' + year).toPromise().then((res: Response) => {
      var weeks = res['weeks'] as Week[];
      this.loadEmployees(year, weeks);
    });
  }

  loadEmployees(year: number, weeks: Week[]) {
    weeks.forEach(week => {
      //console.log("week: " + week.week);
      var currentWeekLine = new SalariesReportLine();
      currentWeekLine.week = week.week;
      this.http.get(this.constant.routeURL + '/GetEmployees/' + year + '/' + currentWeekLine.week).toPromise().then((res: Response) => {
        var employeesToPay = res['employees'] as EmployeeName[];
        this.loadSalaryLines(employeesToPay, year, currentWeekLine);
      });
    });
  }

  loadSalaryLines(employees: EmployeeName[], year: number, mainLine: SalariesReportLine) {
    mainLine.employeesToPay = [];
    employees.forEach(employee => {
      var currentEmployeeLine = new EmployeeSalaryLine();
      currentEmployeeLine.name = employee.name;
      this.http.get(this.constant.routeURL + '/GetSalaryLines/' + year + '/' + mainLine.week + '/' + employee.name).toPromise().then((res: Response) => {
        currentEmployeeLine.salaryLines = res['lines'] as SalariesLine[];
      });
      mainLine.employeesToPay.push(currentEmployeeLine);
    });
    this.salaryReport.push(mainLine);
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

  loadTotals(project: string): StateTotalLine {
    var totals = new StateTotalLine;
    this.http.get(this.constant.routeURL + '/GetReportTotals/' + project).toPromise().then((res: Response) => {
      //alert(res['result'][0].total_budget);
      totals = res['result'][0] as StateTotalLine;
      //alert(this.totals.total_budget);
    });
    return totals;
  }

}
