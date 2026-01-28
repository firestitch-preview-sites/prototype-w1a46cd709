import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/home' }
];