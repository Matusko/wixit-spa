import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardPageComponent} from "./dashboard-page.component";


@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardPageComponent]
})
export class DashboardModule {}
