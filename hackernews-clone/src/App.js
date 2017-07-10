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

      </div>
    );
  }
}

export default App;
