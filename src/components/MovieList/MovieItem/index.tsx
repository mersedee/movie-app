import React, { useEffect, useState } from 'react';

import { Movie, Genre } from 'models';
import { getMovieUrl, getSrcsetUrl } from 'api';
import findGenres from 'helpers/findGenres';
import movieIcon from 'assets/images/film_reel.svg';

import styles from './styles.module.scss';

type AppProps = {
    movie: Movie;
};

const MovieItem = ({ movie }: AppProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    setGenres(findGenres(movie));
  }, []);

  const date = new Date(movie.release_date).getFullYear();

  return (
    <div className={styles.card}>
      {!movie.poster_path ? (
        <div className={styles['no-img']}>
          <img src={movieIcon} alt="icon" />
        </div>
      )
        : (
          <div className={styles['img-container']}>
            <img
              loading="lazy"
              src={getMovieUrl(movie.poster_path)}
              srcSet={getSrcsetUrl(movie.poster_path)}
              alt={movie.title}
            />
            {date ? <span>{date}</span> : null}
          </div>
        )}
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
