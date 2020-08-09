import React, { Component } from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies'

// 27850d20f9f0225c993fb660bdc67b65 moviedb api key

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
  
}

export default App;
