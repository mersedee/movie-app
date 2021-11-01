import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';

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
  const [open, setOpen] = useState(false);

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
                onClick={() => setOpen(true)}
              >
                WATCH TRAILER
              </button>

              <button
                type="button"
                className={classNames(styles.btn, 'button-outline')}
                onClick={() => history.push(`/${trendingMovie.id}`)}
              >
                VIEW INFO
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
        {open && (
        <Modal open={open} onClose={() => setOpen(false)} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
