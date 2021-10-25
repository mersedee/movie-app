export type media = 'all'| 'movie'| 'tv'| 'person';

export type timeWindow = 'day' | 'week';

export type Genre = {
    id: number,
    name: string,
}

export const GENRERS = [
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
