import { Routes } from "@angular/router";

export const routes : Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/page-user/page-user').then(m => m.PageUser)
    }
];