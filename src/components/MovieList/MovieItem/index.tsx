import React, { useEffect, useState } from 'react';

import { Movie } from 'models';
import { getMovieUrl } from 'api';
import { Genre } from 'api/types';
import findGenres from 'helpers/findGenres';

import styles from './styles.module.scss';

type AppProps = {
    movie: Movie;
};

const MovieItem = ({ movie }: AppProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    setGenres(findGenres(movie));
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.img} style={{ backgroundImage: ` url("${getMovieUrl(movie.backdrop_path)}")` }} />
      <div className={styles['card-content']}>
        <div className="d-flex flex-column">
          <div className={styles.subject}>
            {movie.title.length > 18 ? movie.title.slice(0, 18).concat('...') : movie.title}
          </div>
          <div className={styles.desc}>
            {genres.slice(0, 3).map((genre: Genre) => (
              <div className={styles.genre} key={genre.id}>
                {genre.name}<span>,</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.vote}>{movie.vote_average}</div>
      </div>
    </div>
  );
};
export default MovieItem;
