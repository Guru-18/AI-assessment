import React from 'react'
import { PUBLIC_URL } from '../utils/constant'

const Video = ({videoUrl}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <video controls src={`${PUBLIC_URL}/static/uploads/videos/${videoUrl}`} width="500" />
    </div>
  )
}

export default Video