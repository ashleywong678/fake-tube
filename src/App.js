//libraries
import React, {Component} from 'react';
import YouTube from 'react-youtube';
import axios from 'axios'
import './App.css';

//components
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// import youtube from './apis/youtube'

class App extends Component {
  state = {
    videos: [],
    currentVideo: null
  }

  handleSubmit = async (searchBarInput) => {

  }
  // handleSearchSubmit=-{this.handleSubmit}/> {/* sends handleSubmit function to searchbar component */}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>FakeTube</h1>
        </header>
          <SearchBar />
      </div>
    );
    }
}

export default App;
