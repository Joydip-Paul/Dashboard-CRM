import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  isfullArea:boolean = false;
  constructor(private commonService: CommonService) {
  }

  ngOninit() {
    // this.getfullWidth();
  }

  // getfullWidth() {
  //   this.commonService.sidebarState2$.subscribe(open => {
  //     this.isfullArea = open;
  //     console.log("Joydip");
  //   });
  // }
}
