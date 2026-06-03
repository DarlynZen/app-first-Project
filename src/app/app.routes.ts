import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Economics } from './economics/economics';
import { Politics } from './politics/politics';
import { Sports } from './sports/sports';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    {
        path: "economics",
        component: Economics
    },
    {
        path: "politics",
        component: Politics
    },
    {
        path: "sports",
        component: Sports
    }
];
