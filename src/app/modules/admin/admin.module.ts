import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from '../../components/layout/layout.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon'; 


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule, 
    MatListModule,
    MatIconModule 
  ]
})
export class AdminModule { }
