import React, { Component } from 'react';
import youtube from '../api/YouTube';
import SearchBar from './SearchBar';

class App extends Component {
   onTermSubmit = term => {
      youtube.get('/search', {
         params: { q: term }
      });
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