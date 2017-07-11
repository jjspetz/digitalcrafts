import React, { Component } from 'react';
import './App.css';

class App extends Component {

  buildLi() {
    let t = this.props.top500.time.setSeconds;
    let url = this.props.top500.url;
  }

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
            {this.props.top500.map((obj) =>
              let t = {obj.time}.setSeconds;
              <li key={obj.id}>
                <a href={obj.url}>{obj.title}</a>
                <p>{obj.score} by {obj.by} {t}</p>
              </li>
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
