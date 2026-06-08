import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes").then(m => m.authRoutes)
    },
    {
        //** es una ruta comodín. Si el path no coincide con ninguno de los anteriores, se redirige a auth. Angular lee rutas de arriba hacia abajo
        path: "**",
        redirectTo: "auth"
    }
];
