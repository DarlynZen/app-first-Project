import { Routes } from "@angular/router";
//se creó el archivo index.ts para exportar los componentes de la carpeta components
import { PageLogin } from "./components";

export const authRoutes : Routes = [
    {
        path: "",
        pathMatch: "full",
        component: PageLogin
    }
];