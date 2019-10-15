//libraries
import React, {Component} from 'react';
// import YouTube from 'react-youtube'
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
      key: API_KEY, 
      term: searchBarSearch}, 
      (videos) => {
        this.setState({
          videos: videos,
          currentVideo: videos[0]
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
          {this.state.currentVideo ? <CurrentVideo video={this.state.currentVideo}/> : null}
          <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
    }
}

export default App;
