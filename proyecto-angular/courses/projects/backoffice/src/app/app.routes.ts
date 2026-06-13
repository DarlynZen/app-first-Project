import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes").then(m => m.authRoutes)
    },
    {
        //para entrar a la ruta de dashboard se debera pasar primero por la ruta app, que a su vez cargará el componente container
        //container seria el componente padre, por lo que debe tener un router-outlet para mostrar los componentes hijos, en este caso el page-dashboard
        path: "app",
        loadComponent: () => import("./shared/components/container/container").then(m => m.Container),
        children: [
            {
                path: "dashboard",
                loadChildren: () => import("./features/dashboard/dashboard.routes").then(m => m.routes)
            },
            {
                path: "user",
                loadChildren: () => import("./features/user/user.routes").then(m => m.routes)
            }
        ]
    },
    {
        //** es una ruta comodín. Si el path no coincide con ninguno de los anteriores, se redirige a auth. Angular lee rutas de arriba hacia abajo
        path: "**",
        redirectTo: "auth"
    }
];
