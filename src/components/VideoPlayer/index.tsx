import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { Video, VideoList } from 'models';
import isEmpty from 'helpers/is-empty';

import styles from './styles.module.scss';

type AppTypes = {
    videos: VideoList
}

const VideoPlayer = ({ videos }: AppTypes) => {
  const filteredVideos = videos.results.filter((video:Video) => video.site === 'YouTube');

  return (
    <>
      {!isEmpty(videos) && !isEmpty(filteredVideos) ? (
        <div>
          <h2 className={styles.title}>Watch trailer</h2>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${filteredVideos[0].key}-U`}
          />
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ color: 'white', width: '400px', height: '200px' }}
        >There is no trailer yet :((
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
