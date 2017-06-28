import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contacts from './contacts.jsx'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Contacts />
        </MuiThemeProvider>
    );
  }
}

export default App;
