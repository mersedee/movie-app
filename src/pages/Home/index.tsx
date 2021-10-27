import { useContext, useEffect, useState } from 'react';
// import classNames from 'classnames';
import Tabs, { TabPane } from 'rc-tabs';
import InfiniteScroll from 'react-infinite-scroll-component';

import { GlobalContext } from 'context/GlobalState';
import {
  Genre, POPULARITY_SORT, RELEASE_DATE_SORT, VOTE_AVERAGE_SORT,
  Movie, Sort,
} from 'models';
import actions from 'context/actions';
import MovieList from 'components/MovieList';
import findGenres from 'helpers/findGenres';
import Loading from 'components/Loading';
import HeaderSection from './HeaderSection';

import styles from './styles.module.scss';

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { state, dispatch } = useContext(GlobalContext);
  const { trendingMovies, movies } = state;
  const [count, setCount] = useState<number>(2);
  const [sort, setSort] = useState<Sort>(POPULARITY_SORT[0]);
  const [newMovies, setNewMovies] = useState<Movie[]>(movies.results);

  // hooks
  useEffect(() => {
    actions.getTrendingMovies()(dispatch);
    actions.getMovies(1, POPULARITY_SORT[0])(dispatch);
  }, []);

  useEffect(() => {
    if (trendingMovies.results.length > 0) {
      setGenres(findGenres(trendingMovies.results[0]));
      setTrendingMovie(trendingMovies.results[0]);
    }
  }, [trendingMovies]);

  const dropdown = (
    <div className={styles.genre}>
      <span>Genre</span>
      <span className="fa fa-angle-down ms-1" />
    </div>
  );

  const tabs = [
    { key: POPULARITY_SORT[0], tab: 'Trending' },
    { key: VOTE_AVERAGE_SORT[0], tab: 'Top Rated' },
    { key: RELEASE_DATE_SORT[0], tab: 'New Arrivals' },
    { key: 'genre', tab: dropdown },
  ];

  const onSort = (key:any) => {
    actions.getMovies(1, key)(dispatch);
    setSort(key);
  };

  const fetchMoreData = () => {
    setCount(count + 1);
    setTimeout(() => {
      actions.getMovies(count, sort)(dispatch);
      setNewMovies(newMovies.concat(movies.results));
    }, 1500);
  };

  return (
    <div className="container-fluid px-0">
      {trendingMovies.results.length > 0
      && <HeaderSection trendingMovie={trendingMovie} genres={genres} />}
      <div className="layout">
        <div className={styles.tabs}>
          <Tabs defaultActiveKey={tabs[0].key} onChange={onSort}>
            {tabs.map((tab) => (
              <TabPane key={tab.key} tab={tab.tab}>
                <InfiniteScroll
                  dataLength={newMovies.length}
                  next={fetchMoreData}
                  hasMore
                  loader={<Loading />}
                >
                  <MovieList movies={newMovies} />
                </InfiniteScroll>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
