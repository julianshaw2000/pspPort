import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paytable',
  templateUrl: './paytable.component.html',
  styleUrls: ['./paytable.component.scss']
})
export class PaytableComponent implements OnInit, AfterViewInit {




  displayedColumns: string[] = ['tdate', 'name', 'amount', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// Date payment-amount reference-number
export interface PeriodicElement {
  name: string;
  tdate: Date;
  amount: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { tdate: new Date(2022, 8, 6), name: 'NCB-224533', amount: 341.22 },
  { tdate: new Date(2022, 7, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 6, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 5, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 4, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 3, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 2, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 1, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2022, 0, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2021, 11, 6), name: 'NCB-224533', amount: 264.11 },
  { tdate: new Date(2021, 10, 6), name: 'NCB-224533', amount: 264.11 },
];


/*



*/
