import './Contact.css'

import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import { Input } from 'reactstrap'
import { Button } from 'react-bootstrap'

class Contact extends Component {
  constructor(props) {
    super(props)
    //state props of inputs with default input text
    this.state = {
      fullname: 'Enter your name',
      email: 'Enter your email ID',
      phone: '63',
      message: 'Enter your message here',
    }
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //get the value of props from input
  handlesubmit = (event) => {
    alert(`my name is ${this.state.fullname}. 
 My email id is ${this.state.email}
 My mobile number is ${this.state.phone}.
 My message to your company is ${this.state.message}
 `)
    // alert( JSON.stringify(this.state));
    console.log(JSON.stringify(this.state))
    event.preventDefault()
  }

  render() {
    return (
      //Form input details and attributes
      <div>
        <Badge variant="info">
          <h1> How may I help you? </h1>
          <form onSubmit={this.handlesubmit}>
            <label>
              <h4> Full name </h4>{' '}
            </label>
            <Input
              size="lg"
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handlechangeall}
            />{' '}
            <br />
            <label>
              <h4> Email</h4>{' '}
            </label>
            <br />
            <Input
              size="lg"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handlechangeall}
            />{' '}
            <br />{' '}
            <label>
              {' '}
              <h4>Mobile</h4>
            </label>
            <br />
            <Input
              size="lg"
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handlechangeall}
            />{' '}
            <br />
            <label>
              <h4> Message </h4>
            </label>
            <textarea
              value={this.state.message}
              name="message"
              onChange={this.handlechangeall}
            />{' '}
          </form>
          <br></br>
          {/* Form Button */}
          <Input
            variant="secondary"
            size="lg"
            block
            type="submit"
            value="Send"
          />
        </Badge>
      </div>
    )
  }
}

export default Contact
