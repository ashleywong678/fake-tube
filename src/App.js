//libraries
import React, {Component} from 'react';
import YouTube from 'react-youtube';
import YTSearch from 'youtube-api-search'
import './App.css';

//components
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

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

  render(){
    return (
      <div className="App">
          <h1>FakeTube</h1>
          <SearchBar handleSearchSubmit={this.handleSubmit}/>
          <div class='grid'>
            <div class='span-col-3'>
              <CurrentVideo />
            </div>
            <div>
              <VideoList />
            </div>
          </div>
      </div>
    );
    }
}

export default App;
