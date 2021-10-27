export type media = 'all'| 'movie'| 'tv'| 'person';

export type timeWindow = 'day' | 'week';

export type Sort = 'popularity.desc' | 'popularity.asc'
    | 'release_date.desc' | 'release_date.asc'
    | 'vote_average.desc' | 'vote_average.asc';

export type Genre = {
    id: number,
    name: string,
}

// values
export const GENRERS: Genre[] = [
  { id: 0, name: 'All' },
  { id: 28, name: 'Action' },
  { id: 18, name: 'Drama' },
  { id: 16, name: 'Animation' },
  { id: 53, name: 'Thriller' },
  { id: 12, name: 'Adventure' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Sci-Fi' },
  { id: 10770, name: 'TV Movie' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const POPULARITY_SORT: Sort[] = ['popularity.desc', 'popularity.asc'];
export const RELEASE_DATE_SORT: Sort[] = ['release_date.desc', 'release_date.asc'];
export const VOTE_AVERAGE_SORT: Sort[] = ['vote_average.desc', 'vote_average.asc'];
