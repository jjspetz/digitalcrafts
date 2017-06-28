import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './contacts.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
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
    this.setState({ contacts: this.state.contacts})
  }

  render() {
    return (
      <div className='main'>
        <AppBar title="Contacts" />
        <div className='content'>
          <form className='add' onSubmit={event => this.handleSubmit(event)}>
            <br/><br/>
            <label>Name: </label>
            <input type='text' value={this.state.name} onChange={event => this.add(event, 'name')}/>
            <br/><br/>
            <label>Email: </label>
            <input type='text' value={this.state.email} onChange={event => this.add(event, 'email')}/>
            <br/><br/>
            <label>Phone Number: </label>
            <input type='text' value={this.state.phone} onChange={event => this.add(event, 'phone')}/>
            <br/><br/>
            <label>Address: </label>
            <input type='text' value={this.state.address} onChange={event => this.add(event, 'address')}/>
            <br/><br/>
            <label>City: </label>
            <input type='text' value={this.state.city} onChange={event => this.add(event, 'city')}/>
            <br/><br/>
            <label>State: </label>
            <input type='text' value={this.state.state} onChange={event => this.add(event, 'state')}/>
            <br/><br/>
            <label>Zip Code:</label>
            <input type='text' value={this.state.zip} onChange={event => this.add(event, 'zip')}/>
            <br/><br/>
            <button type='submit'>Submit</button>
          </form>

            {this.state.contacts.map( (c) => {
              return (
                <ul className='added'>
                  <li>{c.name}</li>
                  <li>{c.email}</li>
                  <li>{c.phone}</li>
                  <li>{c.address}</li>
                  <li>{c.city}</li>
                  <li>{c.state}</li>
                  <li>{c.zip}</li>
                </ul>
              )}
            )}
        </div>
      </div>
    );
  }
}

export default Contacts
