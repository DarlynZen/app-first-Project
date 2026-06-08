import { Routes } from '@angular/router';
import { SemanaEconomica } from './semana-economica/semana-economica';
import { HomeMagazines } from './home-magazines/home-magazines';

export const magazineRoutes: Routes = [
    {
        //ruta hija
        path: "",
        //pathMatch: "full",
        //component: HomeMagazines,
        loadComponent: () => import('./home-magazines/home-magazines').then(m => m.HomeMagazines),
        //rutas hijas de la ruta hija
        children: [
            {
                path: "gestion",
                loadComponent: () => import('./gestion/gestion').then(m => m.Gestion)
            },
            {
                path: "rumbo-economico",
                loadComponent: () => import('./rumbo-economico/rumbo-economico').then(m => m.RumboEconomico)
            },
            {
                path: "semana-economica",
                loadComponent: () => import('./semana-economica/semana-economica').then(m => m.SemanaEconomica)
            }
        ]
    }
];