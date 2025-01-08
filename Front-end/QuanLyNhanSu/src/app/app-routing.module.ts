import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlynhanvienComponent } from './quanlynhanvien/quanlynhanvien.component';
import { ThemnhanvienComponent } from './quanlynhanvien/themnhanvien/themnhanvien.component';
import { ChinhsuanhanvienComponent } from './quanlynhanvien/chinhsuanhanvien/chinhsuanhanvien.component';
import { XoanhanvienComponent } from './quanlynhanvien/xoanhanvien/xoanhanvien.component';
import { LoginComponent } from './XacThuc/login/login.component';
import { RegisterComponent } from './XacThuc/register/register.component';

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
    path : 'quanlynhanvien/chinhsuanhanvien',component : ChinhsuanhanvienComponent
  },
  {
    path : 'quanlynhanvien/xoanhanvien',component : XoanhanvienComponent
  },
  { 
    path: 'login', component: LoginComponent
  },
  {
   path: 'register',component: RegisterComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
