import React, { Component } from 'react';
import './App.css';

class App extends Component {

  buildTime() {
    let t = this.props.top500.time.setSeconds;
    return t;
  }

  buildHost() {
    let url = this.props.top500.url;
    return url;
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
              <li key={obj.id}>
                <a href={obj.url}>{obj.title}</a>({this.buildHost})
                <p>
                  {obj.score} points by {obj.by} {this.buildTime}
                  | hide | {obj.descendants} comments
                </p>
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
