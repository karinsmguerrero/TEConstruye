import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Miscellaneous/welcome/welcome.component';
import { NavigationComponent } from './Miscellaneous/navigation/navigation.component';
import { NavigationAdminComponent } from './Miscellaneous/navigation-admin/navigation-admin.component';
import { LoginComponent } from './Miscellaneous/login/login.component';
import { BudgetComponent } from './Reports/budget/budget.component';
import { SalariesComponent } from './Reports/salaries/salaries.component';
import { StagesComponent } from './Administration/stages/stages.component';
import { ExpensesComponent } from './Reports/expenses/expenses.component';
import { ClientsComponent } from './Administration/clients/clients.component';
import { RegisterComponent } from './Administration/clients/register/register.component';
import { ListComponent } from './Administration/clients/list/list.component';
import { NavigationGeneralComponent } from './Miscellaneous/navigation-general/navigation-general.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EngineersComponent } from './Administration/engineers/engineers.component';
import { RegisterEngineerComponent } from './Administration/engineers/register-engineer/register-engineer.component';
import { ListEngineerComponent } from './Administration/engineers/list-engineer/list-engineer.component';
import { EmployeesComponent } from './Administration/employees/employees.component';
import { RegisterEmployeeComponent } from './Administration/employees/register-employee/register-employee.component';
import { ListEmployeeComponent } from './Administration/employees/list-employee/list-employee.component';
import { RegisterHoursComponent } from './Administration/employees/register-hours/register-hours.component';
import { ListStageComponent } from './Administration/stages/list-stage/list-stage.component';
import { RegisterStageComponent } from './Administration/stages/register-stage/register-stage.component';
import { SuppliesComponent } from './Administration/supplies/supplies.component';
import { ListSuppliesComponent } from './Administration/supplies/list-supplies/list-supplies.component';
import { RegisterSuppliesComponent } from './Administration/supplies/register-supplies/register-supplies.component';
import { ProjectComponent } from './Administration/project/project.component';
import { RegisterProjectComponent } from './Administration/project/register-project/register-project.component';
import { ListProjectComponent } from './Administration/project/list-project/list-project.component';

import { OnProjectComponent } from './Administration/on-project/on-project.component';
import { InfoProjectComponent } from './Administration/on-project/info-project/info-project.component';
import { StageProjectComponent } from './Administration/on-project/stage-project/stage-project.component';
import { BillProjectComponent } from './Administration/on-project/bill-project/bill-project.component';
import { RegisterStageProjectComponent } from './Administration/on-project/stage-project/register-stage-project/register-stage-project.component';
import { ListStageProjectComponent } from './Administration/on-project/stage-project/list-stage-project/list-stage-project.component';
import { ViewMoreComponent } from './Administration/on-project/stage-project/view-more/view-more.component';
import { BudgetStageComponent } from './Administration/on-project/stage-project/budget-stage/budget-stage.component';
import { RegisterSupplyStageComponent } from './Administration/on-project/register-supply-stage/register-supply-stage.component';
import { ListSupplyStageComponent } from './Administration/on-project/list-supply-stage/list-supply-stage.component';
import { ListWorkerStageComponent } from './Administration/on-project/worker/list-worker-stage/list-worker-stage.component';
import { RegisterWorkerHoursComponent } from './Administration/on-project/worker/register-worker-hours/register-worker-hours.component';

import { PayrollComponent } from './Administration/on-project/stage-project/payroll/payroll.component';
import { TestingComponent } from './testing/testing.component';

import { StateComponent } from './Reports/state/state.component';
import { BudgetPdfComponent } from "./Reports/budget-pdf/budget-pdf.component";

//Código tomado de: https://stackoverflow.com/questions/34904683/how-to-set-locale-in-datepipe-in-angular-2
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/es-cr';
registerLocaleData(localeDeAt);
import { StatePdfComponent } from './Reports/state-pdf/state-pdf.component';
import { ExpenesPdfComponent } from './Reports/expenes-pdf/expenes-pdf.component';
import { SalariesPdfComponent } from './Reports/salaries-pdf/salaries-pdf.component';
import { NavigationEngineerComponent } from './Miscellaneous/navigation-engineer/navigation-engineer.component';
import { ProjectAllComponent } from './Administration/project/project-all/project-all.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    NavigationAdminComponent,
    LoginComponent,
    BudgetComponent,
    SalariesComponent,
    StagesComponent,
    ExpensesComponent,
    ClientsComponent,
    RegisterComponent,
    ListComponent,
    NavigationGeneralComponent,
    EngineersComponent,
    RegisterEngineerComponent,
    ListEngineerComponent,
    EmployeesComponent,
    RegisterEmployeeComponent,
    ListEmployeeComponent,
    RegisterHoursComponent,
    ListStageComponent,
    RegisterStageComponent,
    SuppliesComponent,
    ListSuppliesComponent,
    RegisterSuppliesComponent,
    ProjectComponent,
    RegisterProjectComponent,
    ListProjectComponent,
    OnProjectComponent,
    InfoProjectComponent,
    StageProjectComponent,
    BillProjectComponent,
    RegisterStageProjectComponent,
    ListStageProjectComponent,
    ViewMoreComponent,
    BudgetStageComponent,
    RegisterSupplyStageComponent,
    ListSupplyStageComponent,
    ListWorkerStageComponent,
    RegisterWorkerHoursComponent,
    PayrollComponent,
    TestingComponent,
    StateComponent, 
    BudgetPdfComponent, StatePdfComponent, ExpenesPdfComponent, SalariesPdfComponent, NavigationEngineerComponent,
    ProjectAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: "es-CR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
