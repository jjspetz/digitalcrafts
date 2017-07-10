import React, { Component } from 'react';
import './App.css';

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
            works
            {this.props.top500.map((obj) =>
              <li>{obj.title}</li>
            )}
          </ol>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
