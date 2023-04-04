import '../css/container.css';
import DisplayVideo from './DisplayVideo.jsx'
function Container(props){
    return <div className="videos">
            { props.data.items.map(function(videoItem){
                 return <DisplayVideo key={videoItem.id.videoId} data={videoItem} />
              })
            }
        </div>
}

export default Container;
