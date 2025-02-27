import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { TrafficComponent } from "./components/dashboard/traffic/traffic.component";
import { ServerStatusComponent } from "./components/dashboard/server-status/server-status.component";
import { TicketsComponent } from "./components/dashboard/tickets/tickets.component";
import { DashboardItemsComponent } from "./components/dashboard/dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, TrafficComponent, ServerStatusComponent, TicketsComponent, DashboardItemsComponent],
})
export class AppComponent {


}
