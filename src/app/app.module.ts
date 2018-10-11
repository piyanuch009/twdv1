import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';


import { FormsModule } from '@angular/forms';
import { RoomComponent } from './components/room/room.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

import { AddroomComponent } from './components/addroom/addroom.component';

import { RoomManagementComponent } from './components/room-management/room-management.component';
import { TestComponent } from './components/test/test.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { HomeComponent } from './components/home/home.component';

import { BookingVipComponent } from './components/booking-vip/booking-vip.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PhotoesComponent } from './components/photoes/photoes.component';
import { StaffBookingComponent } from './components/staff-booking/staff-booking.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';





@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    RoomComponent,
    GalleryComponent,
    AboutComponent,
    RegisterComponent,
    routingComponents,
    UserAccountComponent,
    AddroomComponent,
    HomeComponent,
    RoomManagementComponent,
    TestComponent,
    CheckInComponent,
    
    BookingVipComponent,
    PaymentComponent,
    PhotoesComponent,
    StaffBookingComponent,
    AddStaffComponent,
        
    

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
