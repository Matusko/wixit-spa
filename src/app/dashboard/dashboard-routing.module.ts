import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {DashboardPageComponent} from "./dashboard-page.component";

const routes: Routes = [
  { path: "", component: DashboardPageComponent},
  { path: "dashboard", component: DashboardPageComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
