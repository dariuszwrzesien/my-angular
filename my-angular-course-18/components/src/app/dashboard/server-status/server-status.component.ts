import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<ServerStatus>('online');

  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      // nasłuchuje na zmiany w currentStatus i wypisuje je w konsoli
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   this.currentStatus = this.getRandomStatus();
    // }, 2000);
    const interval = setInterval(() => {
      this.currentStatus.set(this.getRandomStatus());
    }, 2000);

    //nowa alternatywa dla onDestroy
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  getRandomStatus(): ServerStatus {
    const statuses: ServerStatus[] = ['offline', 'unknown', 'online'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
