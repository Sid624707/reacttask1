import React from "react";
import '../css/video.css'
import {API_KEY} from './constants.jsx';
import Frame from './Frame';
import Description from './Description';

class DisplayVideo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoCount:null
        }
    }

    videoId=this.props.data.id.videoId;
    title=this.props.data.snippet.title;
    description=this.props.data.snippet.description;
    publishedAt=this.props.data.snippet.publishedAt.toString().slice(0,10);
    
    isrc="https://www.youtube.com/embed/"+this.videoId;
    vsrc="https://www.youtube.com/watch?v="+this.videoId;

    url="https://www.googleapis.com/youtube/v3/videos?key="+API_KEY+
                "&id="+this.videoId+"&part=snippet,statistics";

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.videoCount !== nextState.videoCount;
    }

    componentDidMount(){
        fetch(this.url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let count=data.items[0].statistics.viewCount;
            this.setState({videoCount:count});
            console.log("count ",count);
        }).catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return <div className="video">
                    <Frame src={this.isrc}/>
                    <Description vsrc={this.vsrc} 
                        title={this.title} 
                        description={this.description} 
                        videoCount={this.state.videoCount} 
                        publishedAt={this.publishedAt} />
                </div>
    }
}

export default DisplayVideo;