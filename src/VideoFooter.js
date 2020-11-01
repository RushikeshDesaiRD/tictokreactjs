import React from 'react';
import Video from './Video';
import './video.css'
import './App.css';
import './VideoFooter.css'
 import './videoSidebar.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker  from "react-ticker";
function VideoFooter({channel,description,song}) {
  return (
   <div className="videoFooter"> 
      <div className="videoFooter__text">
         <h3>@{channel}</h3>
         <p>{description}</p>
         <div className="videoFooter__ticker">
         <MusicNoteIcon className="videoFooter__icon"/>
         <Ticker mode="smooth">
         {
            ({index}) => (
               <>
                 <h6>{song}</h6>
               </>
            )
         }
         </Ticker>
         </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png"/>
   </div>
  );
}

export default VideoFooter;
