import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './Administration/clients/clients.component';
import { PropertyComponent } from './General/property/property.component';
import { PropertyALLComponent } from './General/property-all/property-all.component';
import { NavigationComponent } from './General/navigation/navigation.component';
import { WelcomeComponent } from './General/welcome/welcome.component';
import { ListComponent } from './Administration/clients/list/list.component';
import { RegisterComponent } from './Administration/clients/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    PropertyComponent,
    PropertyALLComponent,
    NavigationComponent,
    WelcomeComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
