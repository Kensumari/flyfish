import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule, MatTable } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Account } from '../types';
import { AccountService } from '../services/accounts.service';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, HttpClientModule, MatSortModule, MatProgressSpinnerModule],
  providers: [AccountService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  accounts: Account[] = [];
  displayedColumns: string[] = ['id', 'accountId', 'bank', 'balance', 'currency'];
  dataSource!: MatTableDataSource<Account>;
  loading = false;
  loaded = false;
  error = "";

  constructor(private http: HttpClient, private accountService: AccountService) { }

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  onClick(): void {
    this.loading = true;
    this.accountService.getAccounts().subscribe({
      error(err) { console.error(err) }, next: (accounts: any) => { this.accounts = accounts; this.dataSource = new MatTableDataSource(accounts); this.loading = false; this.loaded = true; }
    },)
  }

  sortData($event: any): void {
    this.dataSource.data.sort((a, b) => {
      if ($event.direction === "asc") {
        return (a.balance - b.balance)
      }
      else if ($event.direction === "desc") {
        return (b.balance - a.balance)
      }
      else return (a.id - b.id);
    });
    this.table.renderRows()
  }

}
