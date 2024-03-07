import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UshurudashboardRoutingModule } from "./ushurudashboard-routing.module";
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';

@NgModule({
  declarations: [
    CommonDashboardComponent
  ],
  imports: [CommonModule, UshurudashboardRoutingModule],
})
export class UshurudashboardModule {}
