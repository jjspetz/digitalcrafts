import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
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

ReactDOM.render(<App top500 = {top500}/>, document.getElementById('root'));
registerServiceWorker();
