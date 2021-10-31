import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Searchbar from 'components/Searchbar';

import styles from './styles.module.scss';

const Header = () => (
  <div className="row justify-content-between align-items-center">
    <div className="col-auto">
      <Link to="/" className={styles.link}>THEMOVIEBOX</Link>
    </div>
    <div className="col-auto">
      <div className="d-flex align-items-center">
        <Searchbar />
        <button type="button" className={classNames(styles.btn, 'button-default')}>
          LOG IN
        </button>
        <button type="button" className={classNames(styles.btn, 'button-primary')}>
          SIGN UP
        </button>
      </div>
    </div>
  </div>
);

export default Header;
