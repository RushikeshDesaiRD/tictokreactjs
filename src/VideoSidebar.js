import React,{useState} from 'react';
import Video from './Video';
 import './videoSidebar.css'
 import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
 import MessageIcon from '@material-ui/icons/Message';
 import ShareIcon from '@material-ui/icons/Share';
 import FavoriteIcon from '@material-ui/icons/Favorite';
function VideoSidebar({likes, shares, messages}) {
  const [liked, setLiked]=useState(false)
  return (
       <div className="videoSidebar">
       <div className="videoSidebar__button">
       {
         liked ? (
           <FavoriteIcon onClick={ e => setLiked(false)}/>
         ):(
            <FavoriteBorderIcon onClick={ e => setLiked(true)}/>
         )
       }
       <p>{liked? likes + 1 : likes}</p>
          
          <MessageIcon/>
          <p>{messages}</p>
          <ShareIcon/>
          <p>{shares}</p>
       </div>
        </div> 
  );
}

export default VideoSidebar;
