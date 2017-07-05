import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './contacts.css';

import database, {User} from './firebase';

class Contacts extends Component {
  constructor() {
    super();
    this.state =  {
      id: '',
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      isOpen: false,
      contacts: [],
    };
    this.getLocalStorage();
  }

  // set contacts to local storage if any
  getLocalStorage() {
    // clear out current state
    //this.setState({ contacts: [] });
    this.state.contacts = [];

    Object.keys(localStorage).forEach((value) => {
      this.state.contacts.push({
          id: JSON.parse(localStorage[value]).id,
          name: JSON.parse(localStorage[value]).name,
          firstName: JSON.parse(localStorage[value]).firstName,
          lastName: JSON.parse(localStorage[value]).lastName,
          email: JSON.parse(localStorage[value]).email,
          phone: JSON.parse(localStorage[value]).phone,
          address: JSON.parse(localStorage[value]).address,
          city: JSON.parse(localStorage[value]).city,
          state: JSON.parse(localStorage[value]).state,
          zip: JSON.parse(localStorage[value]).zip,
      })
    });

    this.state.contacts = this.sortContacts(this.state.contacts);
    this.setState({ contacts:  this.state.contacts});
  }


  add(event, key) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit(event) {
    this.addSubmitToContact();
    console.log(this.state.contacts);
    // to save data to firebase db
    database.ref('contacts/' + User.user.uid).set({
      paul: {name: "Paul B"},
      jim: {name: "Jim"},
    });
    event.preventDefault()
  }
  handleDelete(event, contact) {
    // remove from local storage
    localStorage.removeItem(contact.id);
    this.getLocalStorage();
  }

  expand(event, contact) {
    contact.isOpen = !contact.isOpen;
    this.setState({ contacts: this.state.contacts })
  }

  sortContacts = (array) => {
    // formates stuff
    array.sort((a, b) => {
      let x = a.lastName; let y = b.lastName;
      return ((x < y) ? -1 : (x > y) ? 1 : 0);
    });
    return array;
  }

  addSubmitToContact = () => {
    // pushed info to state
    // this.state.contacts.push({
    //   id: '',
    //   name: this.state.lastName + ', ' + this.state.firstName.slice(),
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   address: this.state.address,
    //   city: this.state.city,
    //   state: this.state.state,
    //   zip: this.state.zip,
    //   isOpen: false,
    // })
    // puts info on local storage
    let id = (parseInt(Object.keys(localStorage)[localStorage.length-1]) + 1) || 0;
    localStorage[id] = JSON.stringify({
      id: id,
      name: this.state.lastName + ', ' + this.state.firstName.slice(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      isOpen: false,
    })
    this.getLocalStorage();
  }

  render() {
    return (
      <div className='main'>
        <AppBar title="Contacts" />
        <div className='content'>
          <form className='add' onSubmit={event => this.handleSubmit(event)}>
            <br/><br/>
            <TextField floatingLabelText="first name"
              value={this.state.firstName}
              onChange={event => this.add(event, 'firstName')}/>
            <br/><br/>
            <TextField floatingLabelText="last name"
              value={this.state.lastName}
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
                <div>
                <button onClick={event => this.handleDelete(event, c)}>X</button>
                <ul onClick={event => this.expand(event, c)}>
                  {
                    c.isOpen ?
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
                </div>
              )}
            )}
          </div>
        </div>
    );
  }
}

export default Contacts;
