import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Account } from "../types";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    readonly apiUrl = "https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK";
    http = inject(HttpClient);
    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.apiUrl);
    }
}