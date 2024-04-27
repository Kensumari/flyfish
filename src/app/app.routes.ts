import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ViewDogComponent } from './view-dog/view-dog.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ViewDogComponent },
    { path: 'api', component: TableComponent },
];
