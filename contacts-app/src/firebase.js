import * as firebase from "firebase";
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRwU1sGI73yiXnCksajqNurdPu9JHoZVs",
    authDomain: "dc-contact-app.firebaseapp.com",
    databaseURL: "https://dc-contact-app.firebaseio.com",
    projectId: "dc-contact-app",
    storageBucket: "dc-contact-app.appspot.com",
    messagingSenderId: "594906355246"
  };
firebase.initializeApp(config);
var database = firebase.database();

export default database;
export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
      })
      .catch(function (e) {
        reject(e);
      });
  });
}
