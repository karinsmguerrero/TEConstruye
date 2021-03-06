import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Miscellaneous/welcome/welcome.component';
import { LoginComponent } from './Miscellaneous/login/login.component';
import { ClientsComponent } from './Administration/clients/clients.component';
import { EmployeesComponent } from './Administration/employees/employees.component';
import { EngineersComponent } from './Administration/engineers/engineers.component';
import { StagesComponent } from './Administration/stages/stages.component';
import { SuppliesComponent } from './Administration/supplies/supplies.component';
import { ProjectComponent } from './Administration/project/project.component';
import { OnProjectComponent } from './Administration/on-project/on-project.component';
import { ListStageProjectComponent } from './Administration/on-project/stage-project/list-stage-project/list-stage-project.component';
import { BudgetStageComponent } from './Administration/on-project/stage-project/budget-stage/budget-stage.component';

import { RegisterHoursComponent } from './Administration/employees/register-hours/register-hours.component';
import { BudgetComponent } from './Reports/budget/budget.component';
import { InfoProjectComponent } from './Administration/on-project/info-project/info-project.component';

import { ViewMoreComponent } from './Administration/on-project/stage-project/view-more/view-more.component';
import { RegisterProjectComponent } from './Administration/project/register-project/register-project.component';
import { TestingComponent } from './testing/testing.component';
import { RegisterSupplyStageComponent } from './Administration/on-project/register-supply-stage/register-supply-stage.component';

import { StateComponent } from './Reports/state/state.component';
import { BudgetPdfComponent } from './Reports/budget-pdf/budget-pdf.component';
import { SalariesComponent } from './Reports/salaries/salaries.component';
import { ExpensesComponent } from './Reports/expenses/expenses.component';
import { RegisterStageComponent } from './Administration/stages/register-stage/register-stage.component';
import { RegisterStageProjectComponent } from './Administration/on-project/stage-project/register-stage-project/register-stage-project.component';
import { PropertyComponent } from './Administration/property/property.component';
import { BillProjectComponent } from './Administration/on-project/bill-project/bill-project.component';
import { ProjectAllComponent } from './Administration/project/project-all/project-all.component';




const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'users/clients', component: ClientsComponent},
  { path: 'employees/register', component: EmployeesComponent},
  { path: 'users/engineers', component: EngineersComponent},
  { path: 'sidebar', component: StagesComponent},
  { path: 'employees/hours', component: RegisterHoursComponent},
  { path: 'stages', component: StagesComponent},
  { path: 'supplies', component: SuppliesComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'myprojects', component: ProjectAllComponent},
  { path: 'project-detail/:id', component: OnProjectComponent},
  { path: 'project-detail/:id/view-more/:stage', component: ViewMoreComponent},
  { path: 'project-detail/:id/tecres', component: PropertyComponent},
  { path: 'bb', component: TestingComponent},
  { path: 'aa', component: BillProjectComponent},
  { path: 'hours', component: RegisterHoursComponent},
  { path: 'reports/budget', component: BudgetComponent},
  { path: 'reports/state', component: StateComponent},
  { path: 'reports/salaries', component: SalariesComponent},
  { path: 'reports/expenses', component: ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
