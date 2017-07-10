import React, { Component } from 'react';
import './App.css';
import database from './fb-config';

var top500 = [];

database.ref('/v0/topstories')
  .on('value', function(articles) {
    articles.val().forEach(function(item) {
      database.ref('/v0/item/' + item)
        .once('value').then(function(data) {
          top500.push(data.val());
        })
    })
    console.log(top500);
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
        <main>
          <ol>
            <li></li>
          </ol>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
