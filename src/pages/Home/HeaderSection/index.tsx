import React from 'react';
import classNames from 'classnames';

import { Movie } from 'models';
import Header from 'components/header';
import { Genre } from 'api/types';
import { getMovieUrl } from 'api';
import Vote from 'components/Vote';

import styles from './styles.module.scss';

type HeaderType = {
  trendingMovie: Movie,
  genres: Genre[],
}

const HeaderSection = ({ trendingMovie, genres }: HeaderType) => {
  const gradiantStyle = 'linear-gradient(to bottom right, rgba(8.24%, 10.98%, 11.76%, 0.70), rgba(8.24%, 10.98%, 11.76%, 0.54))';

  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `${gradiantStyle},
         url("${getMovieUrl(trendingMovie.backdrop_path, 800, 1920)}")`,
      }}
    >
      <div className="layout">
        <Header />
        <div className={classNames(styles['header-info'], 'layout')}>
          <div>
            <h1 className={styles['header-info-title']}>{trendingMovie.title?.toUpperCase()}</h1>
            <div className="d-flex">
              {genres.map((genre: Genre) => (
                <div className={styles['header-info-detail']} key={genre.id}>
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="d-flex">
              <button
                type="button"
                className={classNames(styles.btn, 'button-primary')}
              >
                Watch movie
              </button>

              <button
                type="button"
                className={classNames(styles.btn, 'button-outline')}
              >
                View info
              </button>

              <button
                type="button"
                className={classNames(styles.btn,
                  styles['btn-default'],
                  'button-default')}
              >
                + Add to Wishlist
              </button>
            </div>
          </div>
          {trendingMovie.vote_average && (
          <Vote
            vote={trendingMovie.vote_average}
            count={trendingMovie.vote_count}
          />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
