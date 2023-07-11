import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SubSink } from 'subsink';
import { TableDataService } from 'src/app/service/table-data/table-data.service';
import { Subscription } from 'rxjs';
import { DataViewComponent } from './modals/data-view/data-view.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss'],
})
export class TableTwoComponent {
  isVisible: boolean = true;
  tableData: any = [];
  private subs = new SubSink();

  tableDataDetails: any;
  tableSubscription: any = Subscription;


  constructor(
    private modalService: NzModalService,
    private tableService: TableDataService
  ) {}

  ngOnInit() {
    this.getAllTableData();
  }

  getAllTableData() {
    this.subs.sink = this.tableService.getTableData().subscribe((res) => {
      this.tableData = res;
    });
  }

  dataShowModal(data: any): void {
    const modal = this.modalService.create({
      nzContent: DataViewComponent,
      nzFooter: null,
      nzCloseIcon: '',
      nzAutofocus: null,
      nzMaskClosable: false,
    });
    const instance = modal.getContentComponent();
    instance.itemDetails = data;
  }

  deleteModal(): void {
    const modal = this.modalService.create({
      nzContent: DeleteModalComponent,
      nzFooter: null,
      nzCloseIcon: '',
      nzAutofocus: null,
      nzMaskClosable: false,
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
