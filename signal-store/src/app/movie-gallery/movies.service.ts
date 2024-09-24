import { Injectable } from '@angular/core';
import { movie, movies } from './movies-data';

function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  async getMovies(): Promise<movie[]> {
    await delay(5000);
    return Promise.resolve(movies);
  }
}
