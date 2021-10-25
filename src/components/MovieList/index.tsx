import React from 'react';
import { Movie } from 'models';
import MovieItem from './MovieItem';

type AppProps = {
    movies: Movie[];
};

const MovieList = ({ movies }:AppProps) => (
  <div className="row">
    {movies.map((movie) => (
      <div key={movie.id} className="col-3 mb-4">
        <MovieItem movie={movie} />
      </div>
    ))}
  </div>
);

export default MovieList;
