import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
import { LoginComponent } from './login/login.component';

 

import { PractitionerComponent } from './pages/practitioner/practitioner.component';
import { PractitionerdetailsComponent } from './pages/practitioner/practitionerdetails/practitionerdetails.component';
 
 
const routes: Routes = [
  { path: '', redirectTo: '/practitioner', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
    
       
  

  
  { path: 'practitioner', component: PractitionerComponent },
  { path: 'practitioner/practitionerdetails', component: PractitionerdetailsComponent },
 
 
  ]; 

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule { } 