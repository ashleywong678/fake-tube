import React from 'react'

const VideoListCard = ({video, handleVideoSelect}) => {
console.log(video)
  return(
    <span onClick={() => handleVideoSelect(video)}>
      <img className='list-item' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div>
        {video.snippet.title}
      </div>
    </span>
  )
}
export default VideoListCard