import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-data-view-modal',
  templateUrl: './data-view-modal.component.html',
  styleUrls: ['./data-view-modal.component.scss']
})
export class DataViewModalComponent {

  @Input() itemDetails: any;

  constructor(private modal: NzModalRef) {
  }

  ngOnInit () {
    console.log("Hi", this.itemDetails);
  }


  closeTaskModal() {
    this.modal.destroy();
  }
}
