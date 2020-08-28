import React, { Component, useState, useEffect } from "react";
import "./Form.css";
import { Link } from 'react-router-dom';
import {Button, Form, Spinner, ButtonToolbar} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'




function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  const handleClick = () => setLoading(true);

  return (
    <ButtonToolbar>
      <Button 
      variant="outline-success"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}  >
      {isLoading ? 'Loading…' : 'Click to Continue'}  
      <Redirect to='/result' />
        </Button>
    </ButtonToolbar>
  );
}


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      middleName: null,
      lastName: null,
      dob: null,
      pob: null,
      mmn: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        middleName: "",
        lastName: "",
        mmn: "",
        dob: "",
        pob: ""
      }
    };
  }
  onSubmit = () => {
    return <Redirect to='/target' />
  }  

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            First Name: ${this.state.middleName}
            Last Name: ${this.state.lastName}
            dob: ${this.state.dob}
            pob: ${this.state.pob}
            pob: ${this.state.mmn}
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "dob":
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "pob":
        formErrors.pob =
          value.length < 4 ? "minimum 4 characaters required" : "";
        break;
      case "mmn":
        formErrors.mmn =
          value.length < 4 ? "minimum 4 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Enter User Details</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="middleName">
              <label htmlFor="middleName">Middle Name</label>
              <input
                className={formErrors.middleName.length > 0 ? "error" : null}
                placeholder="Middle Name"
                type="text"
                name="middleName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.middleName.length > 0 && (
                <span className="errorMessage">{formErrors.middleName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="dob">
              <label htmlFor="dob">Date of Birth</label>
              <input
                className={formErrors.dob.length > 0 ? "error" : null}
                placeholder="Date of Birth"
                type="date"
                name="dob"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.dob.length > 0 && (
                <span className="errorMessage">{formErrors.dob}</span>
              )}
            </div>
            <div className="pob">
              <label htmlFor="pob">Place of Birth</label>
              <input
                className={formErrors.pob.length > 0 ? "error" : null}
                placeholder="Place of Birth"
                type="text"
                name="pob"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.pob.length > 0 && (
                <span className="errorMessage">{formErrors.pob}</span>
              )}
            </div>
            <div className="mmn">
              <label htmlFor="mmn">Mothers Maiden Name</label>
              <input
                className={formErrors.mmn.length > 0 ? "error" : null}
                placeholder="Mothers Maiden Name"
                type="text"
                name="mmn"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.mmn.length > 0 && (
                <span className="errorMessage">{formErrors.mmn}</span>
              )}
            </div>
        
            <div className="fg text-center">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" inline label="PSA" />
                <Form.Check type="checkbox" inline label="DFA" />
                <Form.Check type="checkbox" inline label="NBI" />
                <Form.Check type="checkbox" inline label="PHILHEALTH" />
                <Form.Check type="checkbox" inline label="PAGIBIG" />
              </Form.Group>
            </div>

            <div className="createAccount">
              
                  <App />

               

            </div>
         
          </form>
        </div>
      </div>
    );
  }
}

export default Form1;


