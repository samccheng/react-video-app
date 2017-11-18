import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import api_key from './api/api-key'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTsearch({key: api_key, term: 'lego'}, videos => {
      console.log(videos)
      this.setState({ videos })
    })

  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
