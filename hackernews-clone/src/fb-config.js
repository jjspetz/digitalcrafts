import * as firebase from "firebase";
import {set_top500} from './actions';
import store from './store';

var config = {
  databaseURL: 'https://hacker-news.firebaseio.com/'
};
firebase.initializeApp(config);
var database = firebase.database();

var pageOfArticles = [];

database.ref('/v0/topstories')
  .on('value', function(articles) {
    var getArticles = new Promise(function (resolve, reject) {
      var plist = [];
      articles.val().slice(0, 30).forEach(function(item) {
        var p = database.ref('/v0/item/' + item).once('value');
        plist.push(p);
      })

      Promise.all(plist).then(function (results) {
        pageOfArticles = []
        results.forEach(function(data) {
            // converts time to hours ago
            let time = Math.floor((new Date().getTime()/1000 - data.val().time)/3600);
            let host = (data.val().url+ 'stupidhack').split('/');
            pageOfArticles.push({
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
          });
        resolve();
      });
    })

    getArticles.then(() => {
      store.dispatch(set_top500(pageOfArticles))
    });
});

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     page: state.page
//   };
// }

export default database;
