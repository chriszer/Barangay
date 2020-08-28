import React, { Component, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import user from "../images/user.png";
import "./Login.css";

//get the value of password and email
function Log(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//setting parameters for the password and email that will be longer than 4 characters
  function validateForm() {
    return email.length > 4 && password.length > 4;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    //render the email and password styles with Form function
    <div class="form-group"> 
    <div className="Login">
      <form onSubmit={handleSubmit}>
      <img src={user} className="signup-img"/>
        <FormGroup controlId="email" bsSize="large">
          
          <FormLabel><h5>Enter Email</h5></FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel><h5>Enter Password</h5></FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        
        <Button variant="dark" block disabled={!validateForm()} type="submit" href="/">
          <h5>Sign up</h5>
        </Button>
 
              
      </form>
    </div>
    </div>
  );
}

//class that will be used into different class.
class Signup extends Component {
    state = {  }
    render() { 
    
        return (  

            <Log />
        );
    }
}
 
export default Signup;