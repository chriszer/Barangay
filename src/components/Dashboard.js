import React, { Component } from 'react';
import Report_PSA from "./Charts/Report_PSA";
import Report_DFA from "./Charts/Report_DFA";
// import {Bar} from 'react-chartjs-2';
import {Container, Col, Row, } from 'react-bootstrap';
import Main from './Main';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
      }
    render() { 
      let
      {count}= this.props
        return (
          
    <div className="dashboard row d-flex justify-content-center" block>
    <Container>
  <Row>
  <Col xs={10} md={11} sm={12}><Report_PSA/></Col>
  <Col xs={10} md={11} sm={12}><Report_DFA /></Col>
  </Row> 
  <Row>

  </Row> 

</Container>

)

</div>

         );
    }
}
 
export default  Dashboard;





{/* <Linereact location="PSA" legendPosition="bottom"/> */}