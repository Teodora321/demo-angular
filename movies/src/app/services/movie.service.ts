import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '?api_key=4f4f5cda21ea1f9f34b84b657e493898';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Array<Movie>> {

    return this.http.get<Array<Movie>>(BASE_URL + `/popular` + API_KEY);
  }

}
