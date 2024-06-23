"use client"
import YouTube from "react-youtube"

const VideoPlayer = ({ Trailer }) => {
    const resoVideo = {
            width:'100%'
    }



    return(
        <div className="flex justify-center items-center my-10 ">
            <YouTube videoId={Trailer} 
            onReady={event => {event.target.pauseVideo()}}
            opts={resoVideo}  
            className="md:w-10/12 w-full md:h-5/6 h-full"
            />
        </div>
    )
}

export default VideoPlayer