import React from 'react';

import styles from './styles.module.scss';

const ReactStars = require('react-rating-stars-component').default;

type AppProps = {
    count: number,
    vote: number,
}

const Vote = ({ count, vote = 1 }: AppProps) => {
  const voteNumber = (value: number) => Math.round((value / 2) * 10) / 10;
  return (
    <div className={styles.box}>
      <div className={styles.count}>Rating <span>based on {count} reviews</span></div>
      <div className="d-flex align-items-center justify-content-between">
        <ReactStars
          value={voteNumber(vote)}
          size={24}
          edit={false}
          emptyIcon={<span className="fa fa-star-o" />}
          halfIcon={<span className="fa fa-star-half-empty" />}
          filledIcon={<span className="fa fa-star" />}
          activeColor="#f16915"
          color="#f16915"
          isHalf
        />
        <div className={styles.rate}>{voteNumber(vote)}</div>
      </div>
    </div>
  );
};

export default Vote;
