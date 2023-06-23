import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrmComponent } from './components/crm/crm.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TableOneComponent } from './components/table-one/table-one.component';
import { DataViewModalComponent } from './components/table-one/modals/data-view-modal/data-view-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    TestComponent,
    CrmComponent,
    AnalyticsComponent,
    EcommerceComponent,
    ProjectsComponent,
    SidebarComponent,
    HomeComponent,
    TableOneComponent,
    DataViewModalComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
