import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isfullArea: boolean = true;
  isVisible = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getfullBody();
  }

  getfullBody() {
    this.commonService.dashboardBody$.subscribe((open) => {
      this.isfullArea = !this.isfullArea;
      console.log('Joydip');
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
