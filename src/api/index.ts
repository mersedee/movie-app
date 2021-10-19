export const baseUrl = '/';

export const getMovieListUrl = () => `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
