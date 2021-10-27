import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Loading = () => (
  <div className="my-5">
    <ul className={styles.ul}>
      {[0, 1, 2, 3, 4, 5].map((item, index) => (
        <li
          key={item}
          className={classNames(styles.li, styles[`li-${index}`])}
        />
      ))}
    </ul>
    <div className={styles.loading}>LOADING</div>
  </div>
);

export default Loading;
