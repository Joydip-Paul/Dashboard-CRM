import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrmComponent } from './components/crm/crm.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';
import { TableOneComponent } from './components/table-one/table-one.component';
import { ChartCollectionOneComponent } from './components/chart-collection-one/chart-collection-one.component';
import { TableTwoComponent } from './components/table-two/table-two.component';
import { ChartCollectionTwoComponent } from './components/chart-collection-two/chart-collection-two.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
      {
        path: 'table-two',
        component: TableTwoComponent,
      },
      {
        path: 'chart-collection-one',
        component: ChartCollectionOneComponent,
      },
      {
        path: 'chart-collection-two',
        component: ChartCollectionTwoComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
