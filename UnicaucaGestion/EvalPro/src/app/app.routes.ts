import { Routes } from '@angular/router';
import { LoginComponent } from './unicauca/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/unicauca/login', pathMatch: 'full' },
    { path: 'unicauca/login', component: LoginComponent }
];