import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-module/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {  AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowTimeComponent } from './module/show-time/show-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ShowTimeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//AuthService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
