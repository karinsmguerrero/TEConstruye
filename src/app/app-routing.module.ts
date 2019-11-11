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
import { RegisterStageComponent } from './Administration/stages/register-stage/register-stage.component';
import { OnProjectComponent } from './Administration/on-project/on-project.component';
import { RegisterStageProjectComponent } from './Administration/on-project/stage-project/register-stage-project/register-stage-project.component';
import { ListStageProjectComponent } from './Administration/on-project/stage-project/list-stage-project/list-stage-project.component';
import { BudgetStageComponent } from './Administration/on-project/stage-project/budget-stage/budget-stage.component';

import { RegisterHoursComponent } from './Administration/employees/register-hours/register-hours.component';
import { BudgetComponent } from './Reports/budget/budget.component';




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

  { path: 'onProject', component: OnProjectComponent},
  { path: 'aa', component: RegisterStageProjectComponent},
  { path: 'bb', component: ListStageProjectComponent},
  { path: 'cc', component: BudgetStageComponent},
  { path: 'hours', component: RegisterHoursComponent},
  { path: 'reports/budget', component: BudgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
