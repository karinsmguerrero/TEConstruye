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



const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'users/clients', component: ClientsComponent},
  { path: 'employees/register', component: EmployeesComponent},
  { path: 'users/engineers', component: EngineersComponent},
  { path: 'stages', component: StagesComponent},
  { path: 'supplies', component: SuppliesComponent},
  { path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
