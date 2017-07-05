import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500, indigo100, indigo900, grey500, grey700, white} from 'material-ui/styles/colors';
import Contacts from './contacts.jsx'

import {auth} from './firebase';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import {BrowsrRouter, Route, Link} from 'react-router-dom';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo100,
    primary3Color: indigo900,
    accent1Color: grey500,
    accent2Color: grey700,
    alternateTextColor: white,
    labelColor: white,
  }
})

class App extends Component {
  login () {
    auth()
      .then(function (user) {
        console.log(user);
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <button>Login</button>

            <Contacts/>
          </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
