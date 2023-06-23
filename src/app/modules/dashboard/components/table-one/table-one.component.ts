import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DataViewModalComponent } from './modals/data-view-modal/data-view-modal.component';
import { SubSink } from 'subsink';
import { TableDataService } from 'src/app/service/table-data/table-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss'],
})
export class TableOneComponent {
  isVisible: boolean = true;
  tableData: any = [];
  private subs = new SubSink();

  tableDataDetails: any;
  tableSubscription: any = Subscription;

  tableList: any = [];
  itemPerPage: number = 10;
  public selectedPage = 1;
  constructor(
    private modalService: NzModalService,
    private tableService: TableDataService
  ) {}

  ngOnInit() {
    this.getAllTableData();
  }

  dataShowModal(data: any): void {
    console.log(data);
    const modal = this.modalService.create({
      nzContent: DataViewModalComponent,
      nzFooter: null,
      nzCloseIcon: '',
      nzAutofocus: null,
      nzMaskClosable: false,
    });
    const instance = modal.getContentComponent();
    instance.itemDetails = data;
  }

  getAllTableData() {
    this.subs.sink = this.tableService.getTableData().subscribe((res) => {
      this.tableData = res;
      let pageIndex = (this.selectedPage - 1) * this.itemPerPage;
      this.tableList = this.tableData.slice(pageIndex, this.itemPerPage);
    });
  }

  // pagination
  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.itemPerPage = Number(newSize);
    this.changePage(1);
    console.log(this.itemPerPage);
  }

  get PageNumbers(): number[] {
    return Array(Math.ceil(this.tableData.length / this.itemPerPage))
      .fill(0)
      .map((item, index) => index + 1);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.slicedTableRow();
  }

  slicedTableRow() {
    let pageIndex = (this.selectedPage - 1) * this.itemPerPage;
    let endIndes =
      (this.selectedPage - 1) * this.itemPerPage + this.itemPerPage;
    this.tableList = [];
    this.tableList = this.tableData.slice(pageIndex, endIndes);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
