import React, { useState } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

const Searchbar = () => {
  const [active, setActive] = useState(false);

  return (
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
  );
};

export default Searchbar;
