import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { Movie, Genre } from 'models';
import Header from 'components/header';
import { getMovieImageUrl } from 'api';
import Vote from 'components/Vote';

import styles from './styles.module.scss';

type HeaderType = {
  trendingMovie: Movie,
  genres: Genre[],
}

const HeaderSection = ({ trendingMovie, genres }: HeaderType) => {
  const history = useHistory();

  const gradiantStyle = 'linear-gradient(to bottom right, rgba(8.24%, 10.98%, 11.76%, 0.70), rgba(8.24%, 10.98%, 11.76%, 0.54))';

  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `${gradiantStyle},
         url("${getMovieImageUrl(trendingMovie.backdrop_path, true)}")`,
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
                onClick={() => history.push(`/${trendingMovie.id}`)}
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
          {trendingMovie.vote_average && trendingMovie.vote_average > 0 ? (
            <Vote
              vote={trendingMovie.vote_average}
              count={trendingMovie.vote_count}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
