import React from 'react';
import { Video, VideoList } from 'models';
import ReactPlayer from 'react-player/youtube';

import styles from './styles.module.scss';
import isEmpty from '../../helpers/is-empty';

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
          className="my-5 text-center"
          style={{ color: 'white' }}
        >There is no trailer yet :((
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
