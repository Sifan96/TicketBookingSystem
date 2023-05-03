import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookingComponent } from './module/booking/booking.component';
import { ShowTimeComponent } from './module/show-time/show-time.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show-time', component: ShowTimeComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
