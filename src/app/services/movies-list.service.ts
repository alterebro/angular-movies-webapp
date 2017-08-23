import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Injectable()
export class MoviesService {
    constructor() { }

    getMovies(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }

    getMovieDetail(id: number) {
        return MOVIES.filter(movie => movie.id === id);
    }
}

