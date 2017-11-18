import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props)=> {
  return (
    <div className="list">
      <ul>
        {props.videos.map(video =>
          <VideoItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} vid={video}
        />)}
      </ul>
    </div>
  )
}

export default VideoList
