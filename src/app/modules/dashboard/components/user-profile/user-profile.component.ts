import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  uploadFileName: string[] = [];
  fileUrl: string = 'http://storeapi.gerasim.in/customer/';
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  uploadImage(event: any) {
    // debugger;
    const file = event.currentTarget.files[0];
    if ((file.type == 'image/png' || file.type == 'image/jpeg') && file.size < 6000000) {
      const formObj = new FormData();
      formObj.append('file', file);
      this.http
        .post('https://storeapi.gerasim.in/api/Customer/Upload', formObj)
        .subscribe((res: any) => {
          this.uploadFileName.push(res);
        });
    } 
    else {
      if (file.size > 600000) {
        alert('Boro');
      } else {
        alert('Error');
      }
    }
  }
}
