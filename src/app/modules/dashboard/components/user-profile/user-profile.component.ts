import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  uploadFileName: string[] = [];
  fileUrl: string = 'https://www.filestackapi.com/api/';
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  uploadImage(event: any) {
    // debugger;
    const file = event.currentTarget.files[0];
    if ((file.type = 'image/png' && file.size < 6000000)) {
      const formObj = new FormData();
      formObj.append('file', file);
      this.http
        .post('https://www.filestackapi.com/api/file', formObj)
        .subscribe((res: any) => {
          this.uploadFileName.push(res);
        });
    } else {
      if (file.size > 600000) {
        alert('Boro');
      } else {
        alert('Error');
      }
      console.log('error');
      alert('Only png is alowed');
    }
  }
}
