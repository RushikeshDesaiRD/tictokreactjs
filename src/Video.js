import React,{useRef,useState} from 'react';
import './video.css'
import './VideoFooter.css'
 import './videoSidebar.css'
 import video from './HongKong.mp4'
 import VideoSidebar from "./VideoSidebar";
 import VideoFooter from "./VideoFooter";
function Video({
    url,
    channel,
    description,
    song,
    likes,
    shares,
    messages
}) {
    const [play, setPlay]=useState(false)
    const videoRef=useRef(null)
    const onVideoPress =()=>{
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
        
    }
  return (
   <div className="video"> 
       <img src="https://purepng.com/public/uploads/large/tik-tok-logo-6fh.png" className="logo-my" />
    <video className="video__player"
    loop
    onClick={onVideoPress}
    ref={videoRef}
     src={url}>
     </video>
 
     <VideoFooter channel={channel} description={description} song={song}/>
    
     <VideoSidebar likes={likes} shares={shares} messages={messages}/> 
   </div>
  );
}

export default Video;
