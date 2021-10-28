import { useContext, useEffect, useState } from 'react';
// import classNames from 'classnames';
import Tabs, { TabPane } from 'rc-tabs';
import InfiniteScroll from 'react-infinite-scroll-component';

import { GlobalContext } from 'context/GlobalState';
import actions from 'context/actions';
import MovieList from 'components/MovieList';
import findGenres from 'helpers/findGenres';
import Loading from 'components/Loading';
import HeaderSection from 'pages/Home/HeaderSection';
import {
  Genre, POPULARITY_SORT, RELEASE_DATE_SORT, VOTE_AVERAGE_SORT,
  Movie, Sort, Tab,
} from 'models';

import styles from './styles.module.scss';

const dropdown = (
  <div className={styles.genre}>
    <span>Genre</span>
    <span className="fa fa-angle-down ms-1" />
  </div>
);

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { state, dispatch } = useContext(GlobalContext);
  const { trendingMovies, movies } = state;
  const [count, setCount] = useState<number>(2);
  const [sort, setSort] = useState<Sort>(POPULARITY_SORT[0]);
  const [newMovies, setNewMovies] = useState<Movie[]>([]);

  // hooks
  useEffect(() => {
    actions.getTrendingMovies()(dispatch);
  }, []);

  useEffect(() => {
    setNewMovies([]);
    setCount(2);
    actions.getMovies(1, sort)(dispatch);
  }, [sort]);

  useEffect(() => {
    setNewMovies(newMovies.concat(movies.results));
  }, [movies.results]);

  useEffect(() => {
    const min = 0;
    const max = 19;
    if (trendingMovies.results.length > 0) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setGenres(findGenres(trendingMovies.results[randomNumber]));
      setTrendingMovie(trendingMovies.results[randomNumber]);
    }
  }, [trendingMovies]);

  const tabs: Tab[] = [
    { key: POPULARITY_SORT[0], tab: 'Trending' },
    { key: VOTE_AVERAGE_SORT[0], tab: 'Top Rated' },
    { key: RELEASE_DATE_SORT[0], tab: 'New Arrivals' },
    { key: 'genre', tab: dropdown },
  ];

  const onSort = (key:any) => {
    setSort(key);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const fetchMoreData = () => {
    setCount(count + 1);
    setTimeout(() => {
      actions.getMovies(count, sort)(dispatch);
    }, 1500);
  };

  return (
    <div className="container-fluid px-0">
      {trendingMovies.results.length > 0
      && <HeaderSection trendingMovie={trendingMovie} genres={genres} />}
      <div className="layout">
        <div className={styles.tabs}>
          <Tabs defaultActiveKey={tabs[0].key} onChange={onSort}>
            {tabs.map((tab:Tab) => (
              <TabPane key={tab.key} tab={tab.tab}>
                <InfiniteScroll
                  dataLength={newMovies.length}
                  next={fetchMoreData}
                  hasMore
                  loader={<Loading />}
                  endMessage={(
                    <p className="text-center my-5">
                      <b>Yay! You have seen it all</b>
                    </p>
                  )}
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
