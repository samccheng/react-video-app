import React from 'react'

const VideoItem = (props) => {
  return (
    <div>
      <li onClick={()=> props.onVideoSelect(props.vid)}>
        <img src={props.vid.snippet.thumbnails.default.url} alt="" />
        {props.vid.snippet.title}
      </li>
    </div>
  )
}

export default VideoItem
