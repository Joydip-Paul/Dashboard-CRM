import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgZorroAntdModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzModalModule,
    // DashboardModule,
  ],
  exports: [CommonModule, NzModalModule, NzButtonModule],
  providers: [],
})
export class SharedModule {}
