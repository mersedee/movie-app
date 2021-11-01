import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useParams, Link } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalState';
import actions from 'context/actions';
import Header from 'components/header';
import isEmpty from 'helpers/is-empty';
import Vote from 'components/Vote';
import Loading from 'components/Loading';
import MovieList from 'components/MovieList';
import { Genre, ProductionCompany } from 'models';
import { getMovieImageUrl, getLogoUrl } from 'api';
import VideoPlayer from 'components/VideoPlayer';

import { Modal } from 'react-responsive-modal';
import styles from './styles.module.scss';

type Param = {
  id: string
}

const MovieDetail = () => {
  const { id }: Param = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const { movie, similarMovies, videos } = state;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    actions.getMovie(parseInt(id, 10))(dispatch);
    actions.getSimilarMovies(parseInt(id, 10))(dispatch);
  }, [id]);

  const onWatch = (movieId: number) => {
    setOpen(true);
    actions.getMovieVideos(movieId)(dispatch);
  };

  const genres = !isEmpty(movie)
  && movie.genres.slice(0, 2).map((genre: Genre) => (
    <span key={genre.id}>
      {genre.id === 878 ? 'Sci-Fi'
        : genre.name} <i>,</i>
    </span>
  ));

  const details = [
    { label: 'Gener', value: genres },
    { label: 'Language', value: !isEmpty(movie) && movie.spoken_languages[0].name },
    { label: 'Release date', value: new Date(movie.release_date).getFullYear() },
    { label: 'imdb', value: movie.vote_average },
  ];

  return (
    <>
      {isEmpty(movie) ? <div><Loading /></div> : (
        <div>
          <div className={styles.header}>
            <div className="layout">
              <Header />
            </div>
          </div>
          <div className={classNames('layout', styles.content)}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div
                  className={styles.img}
                  style={{ backgroundImage: `url("${getMovieImageUrl(movie.backdrop_path, true)}")` }}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                <div className={styles.details}>
                  {details.map((detail) => (
                    <div className={styles['details-box']} key={detail.label.trim()}>
                      <div className={styles['details-label']}>{detail.label}</div>
                      <div className={styles['details-value']}>{detail.value}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.info}>
                  <h1 className={styles['info-title']}>{movie.title}</h1>
                  <p className={styles['info-desc']}>{movie.overview}</p>
                  <div className={styles['info-vote']}>
                    {movie.vote_average
                      ? <Vote count={movie.vote_count} vote={movie.vote_average} /> : null}
                  </div>
                </div>
                <div className="d-flex">
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(styles.btn, 'button-primary text-decoration-none')}
                  >
                    Watch Movie
                  </a>
                  <button
                    type="button"
                    className={
                      classNames(styles.btn, styles['btn-default'], 'button-default')
                    }
                    onClick={() => onWatch(movie.id)}
                  >
                    Watch Trailer
                  </button>
                  {open && (
                  <Modal open={open} onClose={() => setOpen(false)} center>
                    <VideoPlayer videos={videos} />
                  </Modal>
                  )}
                </div>
                <div className={styles.companies}>
                  <div>Production Company</div>
                  {movie.production_companies.slice(0, 3).map((company:ProductionCompany) => (
                    <div key={company.id}>
                      {
                          company.logo_path
                          && (
                          <img
                            src={getLogoUrl(company.logo_path)}
                            alt={company.name}
                          />
                          )
                        }
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.related}>Related Movie</div>
              <Link to="/" className={styles.all}>See all movies
                <span className="fa fa-long-arrow-right" />
              </Link>
            </div>
            <div className="mt-5">
              <MovieList movies={similarMovies.results.slice(0, 4)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
