import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THEATER='https://api.themoviedb.org/3/discover/movie'
const API_KEY = '?api_key=4f4f5cda21ea1f9f34b84b657e493898';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {

    return this.http.get<Array<Movie>>(BASE_URL + `/popular` + API_KEY);
  };

  getTheaterMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(IN_THEATER+API_KEY + '&with_release_type=2|3')
  }

}
