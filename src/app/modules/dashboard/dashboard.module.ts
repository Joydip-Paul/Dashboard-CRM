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
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartCollectionOneComponent } from './components/chart-collection-one/chart-collection-one.component';
import { ChartCollectionTwoComponent } from './components/chart-collection-two/chart-collection-two.component';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { TableTwoComponent } from './components/table-two/table-two.component';
import { DataViewComponent } from './components/table-two/modals/data-view/data-view.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DeleteModalComponent } from './components/table-one/modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './components/table-one/modals/edit-modal/edit-modal.component';
import { AreaChartTwoComponent } from '../charts/area-chart-two/area-chart-two.component';
import { ColumnChartComponent } from '../charts/column-chart/column-chart.component';
import { AreaChartComponent } from '../charts/area-chart/area-chart.component';
import { BarChartTwoComponent } from '../charts/bar-chart-two/bar-chart-two.component';
import { GaugeChartComponent } from '../charts/gauge-chart/gauge-chart.component';

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
    TableTwoComponent,
    DataViewModalComponent,
    BarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    AreaChartTwoComponent,
    BarChartTwoComponent,
    ColumnChartComponent,
    PieChartComponent,
    GaugeChartComponent,
    ChartCollectionOneComponent,
    ChartCollectionTwoComponent,
    DataViewComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
    NgApexchartsModule
  ],
})
export class DashboardModule {}
