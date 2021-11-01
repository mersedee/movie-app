import React, { Dispatch, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';

import { Movie, Genre, VideoList } from 'models';
import actions from 'context/actions';
import Header from 'components/header';
import { getMovieImageUrl } from 'api';
import Vote from 'components/Vote';
import VideoPlayer from 'components/VideoPlayer';

import styles from './styles.module.scss';

type AppTypes = {
  trendingMovie: Movie
  genres: Genre[]
  dispatch: Dispatch<any>
  videos: VideoList
}

const gradiantStyle = 'linear-gradient(to bottom right, rgba(8.24%, 10.98%, 11.76%, 0.70), rgba(8.24%, 10.98%, 11.76%, 0.54))';

const HeaderSection = ({
  trendingMovie, genres, videos, dispatch,
}: AppTypes) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const onWatch = (id: number) => {
    setOpen(true);
    actions.getMovieVideos(id)(dispatch);
  };

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
        <div className={styles['header-info']}>
          <div className="layout">
            <div className="row justify-content-between align-items-end">
              <div className="col-lg-auto col-md-12 col-sm-12 col-12">
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
                    onClick={() => onWatch(trendingMovie.id)}
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
              <div className="col-lg-auto col-md-12 col-sm-12 col-12 mt-0 mt-md-4 mt-sm-4 mt-4">
                {trendingMovie.vote_average && trendingMovie.vote_average > 0 ? (
                  <div style={{ width: '212px' }}>
                    <Vote
                      vote={trendingMovie.vote_average}
                      count={trendingMovie.vote_count}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {open && (
        <Modal open={open} onClose={() => setOpen(false)} center>
          <VideoPlayer videos={videos} />
        </Modal>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
