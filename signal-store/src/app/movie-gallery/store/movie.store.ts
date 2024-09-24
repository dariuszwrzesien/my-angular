import { computed, Inject, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { movie } from './../movies-data';
import { MovieService } from '../movies.service';

type moviesState = {
  movies: movie[];
  selectedMovies: Map<string, boolean>;
  loading: boolean;
  error: string;
};

const initialState: moviesState = {
  movies: [],
  selectedMovies: new Map<string, boolean>(),
  loading: false,
  error: '',
};

const withLoadingFeature = () => {
  return signalStoreFeature(
    withState<{ loading: boolean }>({
      loading: false,
    }),
    withComputed((state) => ({
      status: computed(() => (state.loading() ? 'loading' : 'success')),
    }))
  );
};
function setLoading() {
  return { loading: true };
}
function stopLoading() {
  return { loading: false };
}

export const MoviesProvider = signalStore(
  withState(initialState),
  withComputed((state) => ({
    moviesCount: computed(() => state.movies.length),
    selectedMoviesCount: computed(() => state.selectedMovies().size),
  })),
  withHooks((state) => {
    const movieService = inject(MovieService);
    return {
      async onInit() {
        patchState(state, setLoading());
        try {
          const movies = await movieService.getMovies();
          patchState(state, { movies }, stopLoading());
        } catch (error: any) {
          patchState(state, { error: error.message }, stopLoading());
        }
      },
    };
  }),
  withMethods((state) => ({
    selectMovieToggle: (title: string) => {
      const updateSelected = new Map<string, boolean>(state.selectedMovies());

      if (updateSelected.has(title)) {
        updateSelected.delete(title);
      } else {
        updateSelected.set(title, true);
      }
      patchState(state, { selectedMovies: updateSelected });
      console.log('selectedMovies', state.selectedMovies());
    },
    deleteSelectedMovies() {
      const movies: movie[] = [];
      state.movies().map((movie) => {
        if (!state.selectedMovies().has(movie.title)) {
          movies.push(movie);
        }
      });
      patchState(state, (state) => ({
        ...state,
        movies,
        selectedMovies: new Map(),
      }));
    },
  })),
  withLoadingFeature()
);
