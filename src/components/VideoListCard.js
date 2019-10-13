import React from 'react'

const VideoListCard = ({video, handleVideoSelect}) => {

  const handleSubmit = () => {
    handleVideoSelect(video)
  }

  return(
    <div className='list-card' onClick={handleSubmit}>
      <img className='list-pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className='list-title'>
        {video.snippet.title}
      </div>
    </div>
  )
}
export default VideoListCard