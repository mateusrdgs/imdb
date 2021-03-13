import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetails } from 'src/app/models/movies';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details$: Observable<MovieDetails> | undefined;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.details$ = this.activatedRoute.params
      .pipe(
        pluck('id'),
        switchMap(id => this.moviesService.getMovieDetails(id))
      )

  }

}
