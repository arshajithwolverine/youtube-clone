import React from 'react'
import './VideoRaw.css'

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className='VideoRow'>
            <img src={image} alt="" />

            

        </div>
    )
}

export default VideoRow
