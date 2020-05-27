import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
   const list = videos.map(video => {
      return <VideoItem video={video} />
   });
   return <div className='ui relaxed divided list'>{list}</div>
}
export default VideoList;