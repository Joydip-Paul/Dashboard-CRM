import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHeaderFullArea: boolean = false;
  pageTitle: string = '';
  parentPage: string = '';

  constructor(private commonService: CommonService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = event.url;
        if (event['url'] == '/') {
          this.pageTitle = 'Manate';
          this.parentPage = 'Dashboard';
        } else if (event['url'] == '/table-one') {
          this.pageTitle = 'Table One';
          this.parentPage = 'Table';
        } else if (event['url'] == '/analytics') {
          this.pageTitle = 'Analytics';
          this.parentPage = 'Dashboard';
        } else {
          this.pageTitle = 'None';
          this.parentPage = 'None';
        }
      }
    });
  }

  ngOnInit() {}

  openSidebar() {
    this.commonService.toggleSidebar();
    this.commonService.toggleBody();
    this.isHeaderFullArea = !this.isHeaderFullArea;
  }
}
