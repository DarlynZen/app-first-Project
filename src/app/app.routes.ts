import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Politics } from './politics/politics';
import { Sports } from './sports/sports';


export const routes: Routes = [
    {
        path: "home", 
        component: Home
    },
    {
        path: "", 
        redirectTo: "home", 
        pathMatch: "full" 
        /*,component: Base */},
    {
        path: "economics",
        //loadComponent es una funcion que se utiliza para cargar un componente solo cuando se accede a su ruta, y como el 
        //loadChildren funciona con promesas entonces se le debe pasar el evento de importacion del componente que se 
        //desea cargar, y luego se debe especificar el nombre del componente que se desea cargar, sirve para no cargar mucho
        //el componente base que es el que se carga al inicio de la aplicacion, y cargar solo los componentes que se necesitan en cada momento
        loadComponent: () => import('./economics/economics').then(m => m.Economics)
        /* component: Economics */
    },
    {
        path: "politics", 
        component: Politics
    },
    {
        path: "sports", 
        component: Sports
    },
    {
        path:"magazines",
        children:[
            {
                path:"angeles",
                loadComponent: () => import('./angeles-post/angeles-post').then(m => m.AngelesPost)
            },
            {
                path:"chicago",
                loadComponent: () => import('./chicago-news/chicago-news').then(m => m.ChicagoNews)
            },
            {
                path:"new-york",
                loadComponent: () => import('./new-york-times/new-york-times').then(m => m.NewYorkTimes)
            },
            {
                path:"washington",
                loadComponent: () => import('./washington-post/washington-post').then(m => m.WashingtonPost)
            }
        ]
    },
    {
        //ruta padre
        path: "magazines-economics",
        //ruta hija
        loadChildren: () => import('./magazines-economics/magazine-routes').then(m => m.magazineRoutes)
    }
];
