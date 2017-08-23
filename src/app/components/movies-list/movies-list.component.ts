import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { Movie } from '../../movie';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.template.html',
    providers: [MoviesService]
})

export class MoviesListComponent implements OnInit {

	movies: Movie[] = [];
	searchByMovieName: String = '';

	constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

	ngOnInit(): void {
		this.moviesService.getMovies()
			.then(movies => {
				this.movies = movies;
			});
	}
}
