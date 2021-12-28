import React, {useState, useEffect, useRef} from 'react'

const PlayPause = () => {
    const videoRef = useRef()

useEffect(() => {
    console.log(videoRef)
},[])
    return <div>
        <video ref={videoRef} width="320" height="240" type="video/mp4"  src='/Circle_Cut_x264.mp4' ></video>
        <button onClick={() => videoRef.current.play()}>start</button>
        <button onClick={() => videoRef.current.pause()}>pause</button>
    </div>
}

export default PlayPause