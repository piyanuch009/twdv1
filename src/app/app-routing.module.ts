import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RoomComponent } from './components/room/room.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'room', component: RoomComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-account', component: UserAccountComponent },
    { path: 'room-management', component: RoomManagementComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, HomeComponent, GalleryComponent, RoomComponent, AboutComponent, RegisterComponent,UserAccountComponent,RoomManagementComponent,BookingComponent]