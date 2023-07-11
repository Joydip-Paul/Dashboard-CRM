import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent {

  @Input() itemDetails: any;

  constructor(private modal: NzModalRef) {
  }

  ngOnInit () {
  }


  closeTaskModal() {
    this.modal.destroy();
  }
}
