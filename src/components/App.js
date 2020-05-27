import React, { Component } from 'react';
import youtube from '../api/YouTube';
import SearchBar from './SearchBar';

class App extends Component {
   state = {
      videos: []
   };
   onTermSubmit = async term => {
      const { data: { items } } = await youtube.get('/search', {
         params: { q: term }
      });
      this.setState(() => ({ videos: items }));
   }
   render() {
      return (
         <div className='ui container'>
            <SearchBar onTermSubmit={this.onTermSubmit} />
         </div>
      )
   }
}
export default App;