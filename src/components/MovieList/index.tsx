import React from 'react';
import { Movie } from 'models';
import MovieItem from './MovieItem';

type AppProps = {
    movies: Movie[];
};

const MovieList = ({ movies }:AppProps) => (
  <div className="row">
    {movies.map((movie) => (
      <div key={movie.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
        <MovieItem movie={movie} />
      </div>
    ))}
  </div>
);

export default MovieList;
