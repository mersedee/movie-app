import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';

import actions from 'context/actions';
import Header from 'components/header';
import Vote from 'components/Vote';
import { GlobalContext } from 'context/GlobalState';

import styles from './styles.module.scss';

const MovieDetail = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { movie } = state;
  useEffect(() => {
    actions.getMovie(580489)(dispatch);
  }, []);

  return (
    <>
      <div className={classNames('layout', styles.header)}>
        <Header />
      </div>
      <div className={classNames('layout', styles.content)}>
        <div className="row">
          <div className="col-6" />
          <div className="col-6">
            <div className={styles.details}>
              <div className={styles['details-box']}>
                <div className={styles['details-label']}>Gener</div>
                <div className={styles['details-value']}>Crime, Comedy</div>
              </div>
            </div>
            <div className={styles.info}>
              <h1 className={styles['info-title']}>{movie.title}</h1>
              <p className={styles['info-desc']}>John Wick is an American neo-noir action thriller media franchise created by screenwriter Derek Kolstad and owned by Lionsgate. Keanu Reeves plays John Wick, a retired hitman who becomes active again in his quest for vengeance.</p>
              <div className={styles['info-vote']}>
                <Vote count={1000} vote={4} />
              </div>
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
                className={
                classNames(styles.btn, styles['btn-default'], 'button-default')
              }
              >
                + Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
