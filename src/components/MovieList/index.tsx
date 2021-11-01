import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'models';
import MovieItem from './MovieItem';

type AppProps = {
    movies: Movie[];
};

const MovieList = ({ movies }:AppProps) => (
  <div className="row">
    {movies.map((movie:Movie) => (
      <div key={movie.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
        {movie.poster_path
          ? (
            <Link to={`/${movie.id}`} className="text-decoration-none">
              <MovieItem movie={movie} />
            </Link>
          )
          : <MovieItem movie={movie} /> }
      </div>
    ))}
  </div>
);

export default MovieList;
