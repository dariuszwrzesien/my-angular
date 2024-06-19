import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketComponent } from './dashboard/ticket/ticket.component';
import { TraficComponent } from './dashboard/trafic/trafic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketComponent,
    TraficComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
