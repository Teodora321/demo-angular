import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  // singleMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0,6);
      // this.singleMovie = this.popularMovies[0];
    })
    this.movieService.getTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(6,12);
      console.log('theatre' + this.inTheaterMovies)
    })
  }

}
