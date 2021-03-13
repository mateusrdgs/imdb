import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() id: string | undefined;
  @Input() title: string | undefined;
  @Input() fullTitle: string | undefined;
  @Input() year: string | undefined;
  @Input() image: string | undefined;
  @Input() crew: string | undefined;
  @Input() imDbRating: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
