import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalState';
import actions from 'context/actions';
import isEmpty from 'helpers/is-empty';
import { Movie } from 'models';

import styles from './styles.module.scss';

const Searchbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const { state, dispatch } = useContext(GlobalContext);
  const { searchedMovies } = state;

  useEffect(() => {
    if (!active) {
      setValue('');
    }
  }, [active]);

  useEffect(() => {
    actions.getSearchedMovies(value)(dispatch);
  }, [value]);

  return (
    <div className="position-relative">
      <div className={classNames(styles.search, active && styles.active)}>
        <form action="">
          <input
            type="text"
            className={styles.input}
            placeholder={active ? 'Search for a Movie' : ''}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(!active)}
        >
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      {active && !isEmpty(searchedMovies.results) && (
        <div className={styles.result}>
          {searchedMovies.results.map((movie:Movie) => (
            <Link
              key={movie.id}
              to={`/${movie.id}`}
              className={styles['result-item']}
            >
              {movie.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
