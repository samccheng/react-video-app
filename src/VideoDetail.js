import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>...loading</div>
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <iframe src={url}></iframe>
    </div>
  )
}

export default VideoDetail
