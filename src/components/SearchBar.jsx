import { useState } from 'react';
import '../css/searchBar.css'
import {API_KEY,maxResults} from './constants';
import Container from './Container';

function SearchBar(){
    const [inputText,setInputText]=useState("");
    const [videoData,setVideoData]=useState();

    function handleChange(event){
        let text=event.target.value;
        setInputText(text);
    }

    function fetchVideosData(event){
        event.preventDefault();
        let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+inputText+"&type=video&key="+API_KEY;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            setVideoData(data);
        });
    }

    return <div className='search-data'>
                <form className="form">
                    <input type="text" className="search-box" onChange={handleChange} placeholder="Search for Something" value={inputText}/>
                    <button className='search-btn' onClick={fetchVideosData}>Search</button>
                </form>
                {videoData && <Container data={videoData}/>}
           </div>
}

export default SearchBar;