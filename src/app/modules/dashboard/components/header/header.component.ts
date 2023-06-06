import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isHeaderFullArea:boolean = false;
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  openCart() {
    this.commonService.toggleSidebar();
    this.commonService.toggleBody();
    this.isHeaderFullArea = !this.isHeaderFullArea;
  }
}
