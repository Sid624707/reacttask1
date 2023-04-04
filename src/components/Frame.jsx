import '../css/frame.css';

function Frame(props){
    return <div className='videoFrame'>
                <iframe src={props.src} title='Youtube Video'/>
           </div>
}

export default Frame;