import { Component, OnInit } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: ServerStatus = 'online';

  ngOnInit() {
    setInterval(() => {
      this.currentStatus = this.getRandomStatus();
    }, 2000);
  }

  getRandomStatus(): ServerStatus {
    const statuses: ServerStatus[] = ['offline', 'unknown', 'online'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }
}
