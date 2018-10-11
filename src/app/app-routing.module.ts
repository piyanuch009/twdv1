import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RoomComponent } from './components/room/room.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { TestComponent } from './components/test/test.component';
import { CheckInComponent } from './components/check-in/check-in.component';

import { BookingVipComponent } from './components/booking-vip/booking-vip.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PhotoesComponent } from './components/photoes/photoes.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { StaffBookingComponent } from './components/staff-booking/staff-booking.component';



const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'room', component: RoomComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-account', component: UserAccountComponent },
    { path: 'room-management', component: RoomManagementComponent },
    { path: 'check-in', component: CheckInComponent },
    { path: 'login', component: LoginComponent },
    { path: 'test', component: TestComponent },
    
    { path: 'booking-vip', component: BookingVipComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'photoes', component: PhotoesComponent },
    { path: 'staff-booking', component: StaffBookingComponent },
    { path: 'add-staff', component: AddStaffComponent },
    { path: '**', redirectTo: '/login' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, GalleryComponent, RoomComponent, AboutComponent, RegisterComponent, UserAccountComponent, RoomManagementComponent, TestComponent,CheckInComponent,BookingVipComponent,PaymentComponent,StaffBookingComponent,AddStaffComponent]