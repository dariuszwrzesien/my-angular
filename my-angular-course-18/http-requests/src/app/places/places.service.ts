import { inject, Injectable, signal } from '@angular/core';

import { Place, PlacesResponse, UserPlaces } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);
  private places = signal<Place[]>([]);
  private userPlaces = signal<Place[]>([]);

  loadedPlaces = this.places.asReadonly();
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Failed to fetch available places, please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Failed to fetch you favorite places, please try again later.'
    ).pipe(tap(({ places }) => this.userPlaces.set(places)));
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient
      .put<UserPlaces>('http://localhost:3000/user-places/', {
        placeId,
      })
      .pipe(
        tap(({ userPlaces }) => {
          this.userPlaces.set(userPlaces);
        }),
        catchError((err) => {
          this.errorService.showError(
            'Failed to add place to your favorites, please try again later.'
          );
          return throwError(
            () =>
              new Error(
                'Failed to add place to your favorites, please try again later.'
              )
          );
        })
      );
  }

  removeUserPlace(place: Place) {
    const prevUserPlaces = this.userPlaces();
    this.userPlaces.set(this.userPlaces().filter((p) => p.id !== place.id));
    return this.httpClient
      .delete<UserPlaces>(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        tap(({ userPlaces }) => {
          this.userPlaces.set(userPlaces);
        }),
        catchError((err) => {
          this.userPlaces.set(prevUserPlaces);
          this.errorService.showError(
            'Failed to remove place from your favorites, please try again later.'
          );
          return throwError(
            () =>
              new Error(
                'Failed to remove place from your favorites, please try again later.'
              )
          );
        })
      );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<PlacesResponse>(url).pipe(
      tap(({ places }) => {
        this.places.set(places);
      }),
      catchError((err) => throwError(() => new Error(errorMessage)))
    );
  }
}
