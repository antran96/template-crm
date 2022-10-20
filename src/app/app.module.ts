import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../modules/login/login.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { UserComponent } from '../modules/user/user.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { SideBarComponent } from '../components/layout/side-bar/side-bar.component';
import { NavBarComponent } from '../components/layout/nav-bar/nav-bar.component';
import { CardComponent } from '../modules/dashboard/card/card.component';
import { PieChartComponent } from '../modules/dashboard/pie-chart/pie-chart.component';
import { TableComponent } from '../components/table/table.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { RecentUsersComponent } from '../modules/dashboard/recent-users/recent-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    LayoutComponent,
    SideBarComponent,
    NavBarComponent,
    CardComponent,
    PieChartComponent,
    TableComponent,
    DialogComponent,
    RecentUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
