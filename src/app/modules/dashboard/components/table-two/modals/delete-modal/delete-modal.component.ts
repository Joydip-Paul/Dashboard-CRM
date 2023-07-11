import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Input() itemDetails: any;

  constructor(private modal: NzModalRef) {
  }

  ngOnInit () {
  }


  closeTaskModal() {
    this.modal.destroy();
  }
}
