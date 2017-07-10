import * as firebase from "firebase";
var config = {
  databaseURL: 'https://hacker-news.firebaseio.com/'
};
firebase.initializeApp(config);
var database = firebase.database();
export default database;
