export interface MostPopular {
  id: string;
  rank: string;
  rankUpDown: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface MostPopularData {
  items: MostPopular[]
  errorMessage: string;
}

export interface MovieDetails {
  id: string;
  title: string;
  year: string;
  plot: string;
  directors: string;
  imDbRating: string;
  imDbRatingVotes: string;
  runtimeStr: string;
  stars: string;
  image: string;
  releaseDate: string;
}
