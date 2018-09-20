import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RoomComponent } from './components/room/room.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

import { AddroomComponent } from './components/addroom/addroom.component';
import { BookingComponent } from './components/booking/booking.component';
import { RoomManagementComponent } from './components/room-management/room-management.component'



@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    DashboardComponent,
    RoomComponent,
    GalleryComponent,
    AboutComponent,
    RegisterComponent,
    routingComponents,
    UserAccountComponent,
    
    AddroomComponent,
    BookingComponent,
    RoomManagementComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
