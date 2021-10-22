import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import Header from 'components/header';
import { GlobalContext } from 'context/GlobalState';
import { getMovieUrl } from 'api';
import { Genre, GENRERS } from 'api/types';
import { Movie } from 'models';
import Vote from 'components/Vote';
import actions from 'context/actions';

import styles from './styles.module.scss';

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { state, dispatch } = useContext(GlobalContext);
  const { trendingMovies, loading } = state;
  const gradiantStyle = 'linear-gradient(to bottom right, rgba(8.24%, 10.98%, 11.76%, 0.70), rgba(8.24%, 10.98%, 11.76%, 0.54))';

  const findGenres = (movie: Movie) => {
    const formatted:Genre[] = [];

    GENRERS.forEach((genre: Genre) => {
      movie.genre_ids.forEach((id) => {
        if (parseInt(id, 10) === genre.id) {
          formatted.push(genre);
        }
      });
    });

    setGenres(formatted);
  };

  useEffect(() => {
    actions.getTrendingMovies()(dispatch);
  }, []);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      findGenres(trendingMovies[0]);
      setTrendingMovie(trendingMovies[0]);
    }
  }, [trendingMovies]);

  if (trendingMovies.length === 0 || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid px-0">
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
              <div>
                {/* <button type="button" className={classNames(styles.btn)}>
                Watch movie</button>
                */}
              </div>
            </div>
            <Vote
              vote={trendingMovie.vote_average}
              count={trendingMovie.vote_count}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
