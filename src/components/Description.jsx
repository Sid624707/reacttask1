function Description(props){
    return <div>
            <a target="_blank" href={props.vsrc} rel="noreferrer">{props.title}</a>
            <p>{props.description}</p>
            <p>{props.videoCount} views</p>
            <p>Published on {props.publishedAt}</p> 
        </div>;
}

export default Description;