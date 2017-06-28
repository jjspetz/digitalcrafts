import React, {Component} from 'react';
// imports material-ui
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      color: '#90ab6f',
    };
  }

  updateState(event, key) {
    this.setState({[key]: event.target.value});
  }

  handleSubmit(event) {
    console.log('submitted: ', this.state);
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <AppBar title = 'My Awesome Form'/>
        <form onSubmit={event=> this.handleSubmit(event)}>
          <Card className='md-card'>
            <CardTitle title='Submit Stuff'/>
            <br/>
            <label>Your Name: </label>
            <input type='text' value={this.state.name}
            onChange={event => this.updateState(event, 'name')}/>
            <select value={this.state.color}
              onChange={event=> this.updateState(event, 'color')}>
              <option value='red'>RED</option>
              <option value='blue'>BLUE</option>
            </select>
            <br/><br/>
            <CardActions>
              <RaisedButton type='submit' label="Submit" primary={true}/>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}
export default MyForm;

// function() {
//   console.log('something')
// }
//
// () => console.log('something')
