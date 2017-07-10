import React, { Component } from 'react';
import './App.css';
import database from './fb-config';

database.ref('/v0/topstories')
  .on('value', function(articles) {
    console.log(articles.val());
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h5>Hacker News </h5>
          <h6>
            <a> new</a> |
            <a> comments</a> |
            <a> show</a> |
            <a> ask</a> |
            <a> jobs</a> |
            <a> submit</a>
          </h6>
        </header>
      </div>
    );
  }
}

export default App;
