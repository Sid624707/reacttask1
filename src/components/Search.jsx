import React  from "react";
import {API_KEY,maxResults} from './constants';
import Container from "./Container";
import '../css/searchBar.css'

class Search extends React.PureComponent{
    constructor(){
        super();
        this.state={
            inputText:"",
            videoData:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.fetchVideosData=this.fetchVideosData.bind(this);
    }

    handleChange = event => {
        this.setState({inputText:event.target.value});
    }

    fetchVideosData = event => {
        event.preventDefault();
        let url="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults="
                +maxResults+"&q="+this.state.inputText+"&type=video&key="+API_KEY;
        
        fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            this.setState({videoData:data});
        });
    }

    render(){
        return <div className='search-data'>
                  <form className="form">
                      <input type="text" className="search-box" onChange={this.handleChange} placeholder="Search for Something" value={this.state.inputText}/>
                      <button className='search-btn' onClick={this.fetchVideosData}>Search</button>
                  </form>
                  {this.state.videoData && <Container data={this.state.videoData}/>}
              </div>
    }
}

export default Search;