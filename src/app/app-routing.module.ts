import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { DashboardComponent } from 'src/modules/dashboard/dashboard.component';
import { LoginComponent } from 'src/modules/login/login.component';
import { UserComponent } from 'src/modules/user/user.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
