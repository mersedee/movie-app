import { media, timeWindow } from 'api/types';

const baseUrl = 'https://api.themoviedb.org/3';

export const getMovieListUrl = () => `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export const getTrendingMoviesUrl = (
  mediaType: media = 'movie',
  timeWindowType: timeWindow = 'day',
) => `${baseUrl}/trending/${mediaType}/${timeWindowType}?api_key=${process.env.REACT_APP_API_KEY}`;

export const getMovieUrl = (path:string, height:number, width: number) => `https://image.tmdb.org/t/p/w${width}_and_h${height}_multi_faces${path}`;
