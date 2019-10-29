import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './Administration/clients/clients.component';
import { PropertyALLComponent } from './General/property-all/property-all.component';
import { WelcomeComponent } from './General/welcome/welcome.component';
import { PropertyComponent } from './General/property/property.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'properties', component: PropertyALLComponent},
  { path: 'property-detail/:id', component: PropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
