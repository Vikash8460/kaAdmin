import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeaderComponent } from '../../components/header/header.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'header', component: HeaderComponent },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
