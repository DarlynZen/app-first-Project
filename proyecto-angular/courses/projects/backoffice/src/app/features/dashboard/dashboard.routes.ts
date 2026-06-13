import { Routes } from "@angular/router";
import { PageDashboard } from "./components/pages/page-dashboard/page-dashboard";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: PageDashboard,
    }
];