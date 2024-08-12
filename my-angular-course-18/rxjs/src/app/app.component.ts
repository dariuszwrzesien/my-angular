import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal<number>(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let count = 0;

    const intervalId = setInterval(() => {
      if (count > 5) {
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }
      subscriber.next(count++);
    }, 2000);
  });

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.clickCount$.subscribe((value) => {
      console.log('clickCountObservable', value);
    });

    const customSubscription = this.customInterval$.subscribe({
      next: (value) => {
        console.log('customInterval$', value);
      },
      complete: () => {
        console.log('customInterval$ completed');
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      customSubscription.unsubscribe();
    });
  }

  onClick(): void {
    this.clickCount.update((prev) => prev + 1);
  }
}
