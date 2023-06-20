import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrmComponent } from './components/crm/crm.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';
import { TableOneComponent } from './components/table-one/table-one.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      { path: '', component: HomeComponent },

      {
        path: 'crm',
        component: CrmComponent,
      },

      {
        path: 'analytics',
        component: AnalyticsComponent,
      },

      {
        path: 'table-one',
        component: TableOneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
