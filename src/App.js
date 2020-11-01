import React,{useState, useEffect} from 'react';
import Video from './Video';
import './App.css';
import nature from "./nature.mp4";
import data from "./tictok.json";
function App() {
  const [videos, setVideos]=useState([])
  useEffect(() => {
   
       
       setVideos(data)
  },[])
  return (
   <div className="app"> 
       <div className="app__videos">
      
      
           {data.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}


        
       </div>
   </div>
  );
}

export default App;

