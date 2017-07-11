import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className='header'>
          <img className='icon' src='https://news.ycombinator.com/y18.gif'/>
          <h4>Hacker News </h4>
          <p className='nav'>
            <a> new</a> |
            <a> comments</a> |
            <a> show</a> |
            <a> ask</a> |
            <a> jobs</a> |
            <a> submit</a>
          </p>
          <p className='login'>login</p>
        </header>
        <main>
          <ol>
            {this.props.top500.map((obj) =>
              <li key={obj.id}>
                <a className='titlelink' href={obj.url}>{obj.title}</a>
                <span className='nottitle'> ({obj.host})</span>
                <p className='nottitle'>
                  {obj.score} points by {obj.by} {obj.time} hours ago | hide | {obj.descendants} comments
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
