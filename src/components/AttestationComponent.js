import React, { Component } from 'react';
import {Card,Form, Accordion, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "./Form.css";



//Accordion in Modal
function Example() {
  
    //checbox attribute from Form function of react bootstrap
    return (
    <div className="body-attest">
  <div className="attest-wrapper text-center">
    <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" inline label="PSA"/>
          <Form.Check    type="checkbox" inline label="DFA" />
          <Form.Check  type="checkbox" inline label="NBI" />
     </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
          <Form.Check  type="checkbox" inline label="PHILHEALTH" />
          <Form.Check  type="checkbox" inline label="PAGIBIG" />
    </Form.Group>

          <Link to={"/form"}>
          
          <Button className="btn" variant="warning" block> Click to Continue
         
           </Button>
           </Link>

           </div>
           </div>
    );}

export default () => {
    return (
        <div className="bottom first-component" background="dark">

            <Example />


        </div>


        );
  }