import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlynhanvienComponent } from './quanlynhanvien/quanlynhanvien.component';
import { ThemnhanvienComponent } from './quanlynhanvien/themnhanvien/themnhanvien.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './XacThuc/login/login.component';
import { RegisterComponent } from './XacThuc/register/register.component';
import { TinhLuongComponent } from './tinhluong/tinhluong.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanlynhanvienComponent,
    ThemnhanvienComponent,
    LoginComponent,
    RegisterComponent,
    TinhLuongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
