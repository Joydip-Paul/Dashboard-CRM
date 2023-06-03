import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  isfullArea:boolean = true;

  constructor(private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.getfullBody();
  }

  getfullBody() {
    this.commonService.dashboardBody$.subscribe(open => {
      this.isfullArea = !this.isfullArea;
      console.log("Joydip");
    });
  }
}
