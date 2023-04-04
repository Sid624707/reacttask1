import { useEffect, useState } from 'react';
import '../css/video.css'
import {API_KEY} from './constants.jsx';
import Frame from './Frame';
import Description from './Description';

function Video(props){

    const [videoCount,setVideoCount]=useState();
    
    const videoId=props.data.id.videoId;
    const title=props.data.snippet.title;
    const description=props.data.snippet.description;
    const publishedAt=props.data.snippet.publishedAt.toString().slice(0,10);
    
    const isrc="https://www.youtube.com/embed/"+videoId;
    const vsrc="https://www.youtube.com/watch?v="+videoId;

    let url="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+
                "&id="+videoId+"&part=snippet,statistics";

    useEffect(function(){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let count=data.items[0].statistics.viewCount;
            setVideoCount(count);
        })
    },[url]);

    return <div className="video">
        <Frame src={isrc}/>
        <Description vsrc={vsrc} 
            title={title} 
            description={description} 
            videoCount={videoCount} 
            publishedAt={publishedAt} />
    </div>
}

export default Video;