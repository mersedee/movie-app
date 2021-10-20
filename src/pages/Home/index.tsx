import { useContext } from 'react';

import Header from 'components/header';
import { GlobalContext } from 'context/GlobalState';
import { getMovieUrl } from 'api';

import styles from './styles.module.scss';

const HomePage = () => {
  const data = useContext(GlobalContext);
  const { trendingMovies } = data.state;
  const headerImg = getMovieUrl(trendingMovies[0]?.backdrop_path, 800, 1920);
  const gradiantStyle = 'linear-gradient(to bottom right, rgba(8.24%, 10.98%, 11.76%, 0.90), rgba(8.24%, 10.98%, 11.76%, 0.74))';

  return (
    <div className="container-fluid px-0">
      <div
        className={styles.header}
        style={{ backgroundImage: `${gradiantStyle}, url("${headerImg}")` }}
      >
        <div className="layout">
          <Header />
          <div className={styles['header-info']} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
