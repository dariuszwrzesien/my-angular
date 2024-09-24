import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place, PlacesResponse } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  places = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  error = signal<string | undefined>(undefined);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onDelete(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe({
      error: (err) => {
        this.error.set(err.message);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
