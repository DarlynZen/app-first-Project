import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Economics } from './economics/economics';
import { Politics } from './politics/politics';
import { Sports } from './sports/sports';
import { Base } from './base/base';

export const routes: Routes = [
    {path: "", component: Base},
    {path: "home", component: Home},
    {path: "economics", component: Economics},
    {path: "politics", component: Politics},
    {path: "sports", component: Sports}
];
