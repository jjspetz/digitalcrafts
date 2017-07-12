import React, { Component } from 'react';
import './App.css';
import Articles from './articles.js';
import { Provider } from 'react-redux';
import store from './store.js';
// forces the app to wait for database call to complete on intial load
import database from './fb-config'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className='header'>
            <img className='icon' alt='hacker news logo' src='https://news.ycombinator.com/y18.gif'/>
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
            <Articles/>
            <p className='more'>More</p>
          </main>
          <footer>

          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
