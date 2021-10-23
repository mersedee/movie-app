import { useContext, useEffect, useState } from 'react';
// import classNames from 'classnames';

import { GlobalContext } from 'context/GlobalState';
import { Genre, GENRERS } from 'api/types';
import { Movie } from 'models';
import actions from 'context/actions';

// import styles from './styles.module.scss';
import HeaderSection from './HeaderSection';

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { state, dispatch } = useContext(GlobalContext);
  const { trendingMovies, loading } = state;

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
      <HeaderSection trendingMovie={trendingMovie} genres={genres} />
    </div>
  );
};

export default HomePage;
