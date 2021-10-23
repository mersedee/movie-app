import { useContext, useEffect, useState } from 'react';
// import classNames from 'classnames';
import Tabs, { TabPane } from 'rc-tabs';

import { GlobalContext } from 'context/GlobalState';
import { Genre, GENRERS } from 'api/types';
import { Movie } from 'models';
import actions from 'context/actions';
import HeaderSection from './HeaderSection';

import styles from './styles.module.scss';

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { state, dispatch } = useContext(GlobalContext);
  const { trendingMovies, loading } = state;

  // functions
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

  // hooks
  useEffect(() => {
    actions.getTrendingMovies()(dispatch);
  }, []);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      findGenres(trendingMovies[0]);
      setTrendingMovie(trendingMovies[0]);
    }
  }, [trendingMovies]);

  // loading
  if (trendingMovies.length === 0 || loading) {
    return <div>Loading...</div>;
  }

  const dropdown = (
    <div className={styles.genre}>
      <span>Genre</span>
      <span className="fa fa-angle-down ms-1" />
    </div>
  );
  const tabs = [
    { key: 'trending', tab: 'Trending', content: '1' },
    { key: 'rated', tab: 'Top Rated', content: '2' },
    { key: 'new', tab: 'New Arrivals', content: '3' },
    { key: 'genre', tab: dropdown, content: '4' },
  ];

  return (
    <div className="container-fluid px-0">
      <HeaderSection trendingMovie={trendingMovie} genres={genres} />
      <div className="layout">
        <div className={styles.tabs}>
          <Tabs defaultActiveKey="light">
            {tabs.map((tab) => (
              <TabPane key={tab.key} tab={tab.tab}>
                {tab.content}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
