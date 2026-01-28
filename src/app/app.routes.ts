import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AccountComponent } from './account.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: '/home' }
];