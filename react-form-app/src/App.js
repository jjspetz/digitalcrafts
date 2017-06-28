import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyForm from './myForm';

// sets theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo800, indigo900} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    primary1Color: indigo800,
    accent1Color: indigo900,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
          <MyForm/>
      </MuiThemeProvider>
    );
  }
}

export default App;
