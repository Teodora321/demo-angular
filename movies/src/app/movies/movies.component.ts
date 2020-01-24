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
  singleMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(data => {
      this.popularMovies = data['results'];
      console.log('p' + this.popularMovies) 
      this.singleMovie = this.popularMovies[0];
      console.log('single movie' + this.singleMovie)
    })
  }

}
