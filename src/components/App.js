import React, { Component } from 'react';
import youtube from '../api/YouTube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
   state = {
      videos: [],
      selectedVideo: null
   };
   onTermSubmit = async term => {
      const { data: { items } } = await youtube.get('/search', {
         params: { q: term }
      });
      this.setState(() => ({ videos: items }));
   }
   onVideoSelect = video => {
      this.setState({ selectedVideo: video });
   }
   render() {
      return (
         <div className='ui container'>
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <VideoList 
               videos={this.state.videos} 
               onVideoSelect={this.onVideoSelect}
            />
         </div>
      )
   }
}
export default App;