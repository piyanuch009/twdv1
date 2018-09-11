import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { LoginComponent } from './components/login/login.component';

import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms'

const routes: Routes = [
	{path: '',redirectTo:'/login',pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
	{path:'**',redirectTo:'/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    LoginComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
