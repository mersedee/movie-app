import React, { useState } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

const Searchbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="position-relative">
      <div className={classNames(styles.search, active && styles.active)}>
        <input
          type="text"
          className={styles.input}
          placeholder={active ? 'Search for a Movie' : ''}
        />
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(!active)}
        >
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      {active
        && (
        <div className={styles.result}>
          <div className={styles['result-item']}>item1</div>
          <div className={styles['result-item']}>item1</div>
          <div className={styles['result-item']}>item1</div>
        </div>
        )}
    </div>
  );
};

export default Searchbar;
