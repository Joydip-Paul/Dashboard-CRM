import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrmComponent } from './components/crm/crm.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'crm', component: CrmComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
