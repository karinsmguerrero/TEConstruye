import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Miscellaneous/welcome/welcome.component';
import { LoginComponent } from './Miscellaneous/login/login.component';
import { ClientsComponent } from './Administration/clients/clients.component';
import { EmployeesComponent } from './Administration/employees/employees.component';
import { EngineersComponent } from './Administration/engineers/engineers.component';
<<<<<<< HEAD
import { StagesComponent } from './Reports/stages/stages.component';
import { RegisterHoursComponent } from './Administration/employees/register-hours/register-hours.component';
=======
import { StagesComponent } from './Administration/stages/stages.component';
import { SuppliesComponent } from './Administration/supplies/supplies.component';
import { ProjectComponent } from './Administration/project/project.component';

>>>>>>> b839cbe25d80d0e306bc25ff9e246fb0245cb993


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'users/clients', component: ClientsComponent},
  { path: 'employees/register', component: EmployeesComponent},
  { path: 'users/engineers', component: EngineersComponent},
<<<<<<< HEAD
  { path: 'sidebar', component: StagesComponent},
  { path: 'employees/hours', component: RegisterHoursComponent}
=======
  { path: 'stages', component: StagesComponent},
  { path: 'supplies', component: SuppliesComponent},
  { path: 'project', component: ProjectComponent}
>>>>>>> b839cbe25d80d0e306bc25ff9e246fb0245cb993
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
