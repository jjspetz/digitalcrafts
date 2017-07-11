import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h5>Hacker News </h5>
          <p className='nav'>
            <a> new</a> |
            <a> comments</a> |
            <a> show</a> |
            <a> ask</a> |
            <a> jobs</a> |
            <a> submit</a>
          </p>
        </header>
        <main>
          Articles are loading
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
