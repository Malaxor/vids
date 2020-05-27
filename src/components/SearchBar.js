import React, { Component } from 'react';

class SearchBar extends Component {
   state = {
      term: ''
   };
   onFormSubmit = event => {
      event.preventDefault();
   }
   render() {
      return (
         <div calssName='search-bar ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
               <div className='field'>
                  <label>Video Search</label>
                  <input
                     type='text'
                     value={this.state.term}
                     onChange={e => this.setState({ term: e.target.value })}
                  />
               </div>
            </form>
         </div>
      )
   }
}
export default SearchBar;