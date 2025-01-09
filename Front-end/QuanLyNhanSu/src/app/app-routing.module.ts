import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlynhanvienComponent } from './quanlynhanvien/quanlynhanvien.component';
import { ThemnhanvienComponent } from './quanlynhanvien/themnhanvien/themnhanvien.component';
import { LoginComponent } from './XacThuc/login/login.component';
import { RegisterComponent } from './XacThuc/register/register.component';
import { TinhLuongComponent } from './tinhluong/tinhluong.component';

const routes: Routes = [
  {
    path : '',component : LoginComponent
  },
  {
    path : 'quanlynhanvien',component : QuanlynhanvienComponent
  },
  {
    path : 'quanlynhanvien/themnhanvien',component : ThemnhanvienComponent
  },
  { 
    path: 'login', component: LoginComponent
  },
  {
   path: 'register',component: RegisterComponent 
  },
  { path: 'quanlynhanvien/tinhluong',component: TinhLuongComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
