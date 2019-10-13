import React from 'react'

const CurrentVideo = ({video}) => {

  const url = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <div className='current'>
      <iframe className='embed-responsive-item' src={url} />
      <p className='description'>{video.snippet.description}</p>
    </div>
  )

}
export default CurrentVideo