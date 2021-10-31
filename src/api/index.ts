import {
  media, timeWindow, Sort, POPULARITY_SORT,
} from 'models';

const baseUrl = 'https://api.themoviedb.org/3';
const tmdbUrl = 'https://image.tmdb.org/t/p/';

export const getMovieListUrl = (
  page: number = 1,
  sortBy: Sort = POPULARITY_SORT[0],
) => {
  const search: string[] = [
    `page=${page}`,
    `sort_by=${sortBy}`,
  ];
  return `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&`
      + `${search.filter((s) => s)
        .join('&')}`;
};

export const getMovieUrl = (id: number) => `${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const getSimilarMoviesUrl = (id: number) => `${baseUrl}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`;

export const getTrendingMoviesUrl = (
  mediaType: media = 'movie',
  timeWindowType: timeWindow = 'day',
) => `${baseUrl}/trending/${mediaType}/${timeWindowType}?api_key=${process.env.REACT_APP_API_KEY}`;

export const getMovieImageUrl = (path:string, background: boolean = false) => {
  if (background) {
    return `${tmdbUrl}w1920_and_h800_multi_faces${path}`;
  }

  return `${tmdbUrl}w440_and_h660_face${path}`;
};

export const getSrcsetUrl = (path:string) => `${tmdbUrl}w220_and_h330_face/${path} 1x, ${tmdbUrl}w440_and_h660_face/${path} 2x`;

export const getLogoUrl = (path: string) => `${tmdbUrl}w200${path}`;
