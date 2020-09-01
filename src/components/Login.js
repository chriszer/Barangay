import React, { Component, useState } from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Table,
  Col,
  Row,
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import dict from '../images/DICT.png'
// import logo from '../images/login_header.png'
import logo from '../images/bataangov.png'
import './Login.css'

function Log(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateForm() {
    return email.length > 2 && password.length > 2
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div class="form-group">
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <img
            style={{ width: '170px', height: '150px' }}
            src={logo}
            className="login-img"
          />

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>
              <h5>Email</h5>
            </FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>
              <h5>Password</h5>
            </FormLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button
            variant="dark"
            block
            disabled={!validateForm()}
            type="submit"
            href="/home"
          >
            <h5>Login</h5>
          </Button>
          <h6>
            {' '}
            Dont have an account? <a href="/signup">Sign Up here</a>
          </h6>
        </form>
      </div>
    </div>
  )
}

class Login extends Component {
  state = {}
  render() {
    return <Log />
  }
}

export default Login
