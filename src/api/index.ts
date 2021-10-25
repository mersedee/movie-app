import { media, timeWindow } from 'api/types';

const baseUrl = 'https://api.themoviedb.org/3';

export const getMovieListUrl = () => `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export const getTrendingMoviesUrl = (
  mediaType: media = 'movie',
  timeWindowType: timeWindow = 'day',
) => `${baseUrl}/trending/${mediaType}/${timeWindowType}?api_key=${process.env.REACT_APP_API_KEY}`;

export const getMovieUrl = (path:string, background: boolean = false) => {
  if (background) {
    return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${path}`;
  }

  return `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
};
