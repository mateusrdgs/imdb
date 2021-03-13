import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Observable, of } from 'rxjs';
import { delay, switchMap, take, toArray, pluck } from 'rxjs/operators';

import { MostPopular, MostPopularData, MovieDetails } from '../models/movies'

import details from './details.json';
import list from './list.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMostPopularMovies(): Observable<MostPopular[]> {

    // return this.http.get<MostPopularData>('https://imdb-api.com/en/API/MostPopularMovies/k_6irogp9d')
    //   .pipe(
    //     delay(600),
    //     pluck('items'),
    //     switchMap(from),
    //     take(12),
    //     toArray()
    //   )
    return of(list)
      .pipe(
        delay(100),
        pluck('items'),
        switchMap(items => from(items)),
        take(12),
        toArray()
      )
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return of(details).pipe(
      delay(1000)
    );
    // return this.http.get<MovieDetails>('https://imdb-api.com/en/API/Title/k_6irogp9d/' + id)
  }
}
