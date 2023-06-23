import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  url: string = '';

  constructor(private http: HttpClient) {
    this.url = '/assets/json/'
  }

  getTableData(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'table-data.json').pipe(map(res => res))
  }

  public getTableDataDetails(id: any): any {
    console.log("Details");
    return this.http.get<any[]>(this.url + 'table-data.json').pipe(map((tableItem: any) => tableItem.find((p: any) => p.id === id)));
  }
}
