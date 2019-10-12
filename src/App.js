//libraries
import React, {Component} from 'react';
import YouTube from 'react-youtube'
import YTSearch from 'youtube-api-search'
import './App.css';

//components
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList';
import CurrentVideo from './components/CurrentVideo';

class App extends Component {
  state = {
    videos: [],
    currentVideo: null
  }

  handleSubmit = (searchBarSearch) => {
    YTSearch({
      part: 'snippet',
      maxResults: 10,
      key: 'AIzaSyDIEenGu5OOX62CJkvnS79NIVaWXSXFG6U', 
      term: searchBarSearch}, 
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
       })
    })
  }

  handleVideoSelect = (video) => {
    this.setState({currentVideo: video})
  }

  render(){
    return (
      <div className="App">
          <h1>FakeTube</h1>
          <SearchBar handleSearchSubmit={this.handleSubmit}/>
          <CurrentVideo />
          <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
    }
}

export default App;
