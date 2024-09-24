import { Component } from '@angular/core';
import { RandomNumberGeneratorComponent } from './random-number-generator/random-number-generator.component';
import { MovieListComponent } from './movie-gallery/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomNumberGeneratorComponent, MovieListComponent],
  // template: `<app-random-number-generator />`,
  template: `<app-movie-list />`,
})
export class AppComponent {
  title = 'signal-store';
}
