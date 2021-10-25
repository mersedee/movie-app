import React, { useEffect, useState } from 'react';

import { Movie } from 'models';
import { getMovieUrl } from 'api';

import { Genre } from 'api/types';
import styles from './styles.module.scss';
import findGenres from '../../../helpers/findGenres';

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
          <div className={styles.subject}>{movie.title}</div>
          <div className={styles.desc}>
            {genres.map((genre: Genre) => (
              <div className={styles['header-info-detail']} key={genre.id}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
        <div>{movie.vote_average}</div>
      </div>
    </div>
  );
};
export default MovieItem;
