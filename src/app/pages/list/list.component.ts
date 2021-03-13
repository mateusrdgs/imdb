import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MostPopular } from 'src/app/models/movies';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies$: Observable<MostPopular[]> | undefined;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    // this.moviesService.getMostPopularMovies()
    //   .subscribe(res => {
    //     console.log(res);
    //   })
    this.movies$ = this.moviesService.getMostPopularMovies()
  }
}
