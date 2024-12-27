import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { QuanlynhanvienComponent } from './quanlynhanvien/quanlynhanvien.component';
import { QuanlyphongbanComponent } from './quanlyphongban/quanlyphongban.component';
import { QuanlytinhluongComponent } from './quanlytinhluong/quanlytinhluong.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrangchuComponent,
    QuanlynhanvienComponent,
    QuanlyphongbanComponent,
    QuanlytinhluongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
