import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './contacts.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      isOpen: false,
      contacts: [],
    };
  }

  add(event, key) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit(event) {
    this.addSubmitToContact();
    console.log(this.state.contacts);
    event.preventDefault()
  }

  expand(event) {
    this.state.isOpen = !this.state.isOpen;
    this.setState({ isOpen: !this.state.isOpen })
  }

  addSubmitToContact = () => {
    this.state.contacts.push({
      name: this.state.name,

      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    })
    this.state.contacts.sort((a, b) => {
      let x = a.name; let y = b.name;
      return ((x < y) ? -1 : (x > y) ? 1 : 0);
    });
    this.setState({ contacts: this.state.contacts });
  }

  render() {
    return (
      <div className='main'>
        <AppBar title="Contacts" />
        <div className='content'>
          <form className='add' onSubmit={event => this.handleSubmit(event)}>
            <br/><br/>
            <TextField floatingLabelText="first name"
              value={this.state.name}
              onChange={event => this.add(event, 'firstName')}/>
            <br/><br/>
            <TextField floatingLabelText="last name"
              value={this.state.name}
              onChange={event => this.add(event, 'lastName')}/>
            <br/><br/>
            <TextField floatingLabelText='email'
              value={this.state.email}
              onChange={event => this.add(event, 'email')}/>
            <br/><br/>
            <TextField floatingLabelText='phone number'
              value={this.state.phone}
              onChange={event => this.add(event, 'phone')}/>
            <br/><br/>
            <TextField floatingLabelText='address'
              value={this.state.address}
              onChange={event => this.add(event, 'address')}/>
            <br/><br/>
            <TextField floatingLabelText='city'
              value={this.state.city}
              onChange={event => this.add(event, 'city')}/>
            <br/><br/>
            <TextField floatingLabelText='state'
              value={this.state.state}
              onChange={event => this.add(event, 'state')}/>
            <br/><br/>
            <TextField floatingLabelText='zip code'
              value={this.state.zip}
                onChange={event => this.add(event, 'zip')}/>
            <br/><br/>
            <RaisedButton primary='primary1Color' labelColor='white' label='Submit' type='submit'></RaisedButton>
          </form>

            {this.state.contacts.map( (c) => {
              return (
                <ul className='added' onClick={event => this.expand(event)}>
                  {
                    this.state.isOpen ?
                    <div>
                    <li>{c.name}</li>
                    <li>phone: {c.phone}</li>
                    <li>email: {c.email}</li>
                    <li>{c.address}</li>
                    <li>{c.city}, {c.state} {c.zip}</li>
                    </div>
                      :
                    <div>
                    <li>{c.name}</li>
                    <li>{c.city}, {c.state}</li>
                    </div>
                }
                </ul>
              )}

            )}
        </div>
      </div>
    );
  }
}

export default Contacts


var one = document.createElement('div')
