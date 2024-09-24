import { Component, inject, Input, OnInit } from '@angular/core';
import { MoviesProvider } from './store/movie.store';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movies.service';
import { movie } from './movies-data';
@Component({
  selector: 'app-movie-item',
  template: `
    <div
      class="flex flex-col items-center gap-4  justify-between border py-3 px-2 relative"
    >
      <img
        [src]="movie.thumbnail"
        [width]="movie.thumbnail_width"
        [height]="movie.thumbnail_height"
        alt=""
        srcset=""
      />
      <h5 class="font-semibold">{{ movie.title }}</h5>
      <div class="flex gap-2 flex-wrap">
        @for (genre of movie.genres; track $index) {
        <div class="kbd ">{{ genre }}</div>
        }
      </div>
      <input
        type="checkbox"
        class="checkbox"
        id="name"
        (change)="handleSelectMovie($event)"
        name="name"
        [checked]="isSelected"
      />
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [FormsModule],
})
export class MovieItemComponent {
  @Input({ required: true }) movie!: movie;
  @Input() isSelected!: boolean;
  movieState = inject(MoviesProvider);
  handleSelectMovie(e: any) {
    this.movieState.selectMovieToggle(this.movie.title);
  }
}
