import _ from 'lodash'
import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import api_key from './api/api-key.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     }

     this.videoSearch('rick and morty')


  }

  videoSearch(term) {
    YTsearch({key: api_key, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

    return (
      <div className="App">
        <SearchBar onSearch={videoSearch}/>
        <div className="player">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>

      </div>
    );
  }
}

export default App;
