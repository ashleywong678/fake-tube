import React from 'react';
import VideoListCard from './VideoListCard'

const VideoList = ({videos, handleVideoSelect}) => {
  
  const videoList = videos.map((video) => {
    return <VideoListCard key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  })

  return(
    <div className='list list-group'>
      {videoList}
    </div>
  )

}

export default VideoList