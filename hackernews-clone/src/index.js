import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import database from './fb-config';

var top500 = [];

database.ref('/v0/topstories')
  .on('value', function(articles) {
    top500 = [];
    articles.val().forEach(function(item) {
      database.ref('/v0/item/' + item)
        .once('value').then(function(data) {
          // converts time to hours ago
          let time = Math.floor((new Date().getTime()/1000 - data.val().time)/3600);
          let host = (data.val().url + 'stupidhack').split('/');
          top500.push({
            id: data.val().id,
            title: data.val().title,
            by: data.val().by,
            score: data.val().score,
            descendants: data.val().descendants,
            kids: data.val().kids,
            time: time,
            host: host[2],
            url: data.val().url
          });
          loadPage();
        });
    })
  });

function loadPage() {
  ReactDOM.render(<App top500 = {top500}/>, document.getElementById('root'));
  registerServiceWorker();
}
