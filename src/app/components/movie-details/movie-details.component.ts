import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../movie';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.template.html',
    providers: [MoviesService]
})

export class MovieDetailsComponent implements OnInit {

    id: number;
    movies: Movie[] = [];

    constructor(private movieservice: MoviesService, private route: ActivatedRoute) {
        this.movieservice = movieservice;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = Number(params['id']);
            this.movies = this.movieservice.getMovieDetail(this.id);
        });
    }
}
