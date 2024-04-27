import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule, MatTable } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Account } from '../types';
import { AccountService } from '../services/accounts.service';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, HttpClientModule, MatSortModule],
  providers: [AccountService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  accounts: Account[] = [];
  displayedColumns: string[] = ['id', 'accountId', 'bank', 'balance', 'currency'];
  dataSource!: MatTableDataSource<Account>;

  constructor(private http: HttpClient, private accountService: AccountService) { }

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  onClick(): void {
    this.accountService.getAccounts().subscribe((accounts) => { this.accounts = accounts; this.dataSource = new MatTableDataSource(accounts) });
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
