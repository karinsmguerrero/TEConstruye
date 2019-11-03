import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
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
<<<<<<< HEAD
import { RegisterHoursComponent } from './Administration/employees/register-hours/register-hours.component';
=======
import { ListStageComponent } from './Administration/stages/list-stage/list-stage.component';
import { RegisterStageComponent } from './Administration/stages/register-stage/register-stage.component';
import { SuppliesComponent } from './Administration/supplies/supplies.component';
import { ListSuppliesComponent } from './Administration/supplies/list-supplies/list-supplies.component';
import { RegisterSuppliesComponent } from './Administration/supplies/register-supplies/register-supplies.component';
import { ProjectComponent } from './Administration/project/project.component';
import { RegisterProjectComponent } from './Administration/project/register-project/register-project.component';
import { ListProjectComponent } from './Administration/project/list-project/list-project.component';
>>>>>>> b839cbe25d80d0e306bc25ff9e246fb0245cb993

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
<<<<<<< HEAD
    RegisterHoursComponent
=======
    ListStageComponent,
    RegisterStageComponent,
    SuppliesComponent,
    ListSuppliesComponent,
    RegisterSuppliesComponent,
    ProjectComponent,
    RegisterProjectComponent,
    ListProjectComponent
>>>>>>> b839cbe25d80d0e306bc25ff9e246fb0245cb993
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    PdfViewerModule,
    AngularDateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
