import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanlynhanvienComponent } from './quanlynhanvien/quanlynhanvien.component';
import { ThemnhanvienComponent } from './quanlynhanvien/themnhanvien/themnhanvien.component';
import { XoanhanvienComponent } from './quanlynhanvien/xoanhanvien/xoanhanvien.component';
import { ChinhsuanhanvienComponent } from './quanlynhanvien/chinhsuanhanvien/chinhsuanhanvien.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './XacThuc/login/login.component';
import { RegisterComponent } from './XacThuc/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanlynhanvienComponent,
    ThemnhanvienComponent,
    XoanhanvienComponent,
    ChinhsuanhanvienComponent,
    LoginComponent,
    RegisterComponent
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
