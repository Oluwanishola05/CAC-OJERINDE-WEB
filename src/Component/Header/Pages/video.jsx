import React from 'react'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import video from '../../../assets/image/vision.mp4';
import '../../../style/video.css';

const Video = () => {
  return (
    <div className='vid' >
      <Player>
        
            <source src={video}  />
        
      </Player>
    </div>
  )
}

export default Video;


