import React, {Component} from 'react';
import YouTube from 'react-youtube';
import './App.css';
import SearchBar from './components/SearchBar'
import youtube from '../apis/youtube'

class App extends Component {
  state = {
    videos: [],
    currentVideo: null
  }

  handleSubmit = async ()


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar handleSearchSubmit=-{this.handleSubmit}/> {/* sends handleSubmit function to searchbar component */}
          
        </header>
      </div>
    );
    }
}

export default App;
