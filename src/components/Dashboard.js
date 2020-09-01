import React, { Component } from 'react'
import Report_Barangay from './Charts/Report_Barangay'
import Report_City from './Charts/Report_City'
import Report_Bataan from './Charts/Report_Bataan'
// import {Bar} from 'react-chartjs-2';
import { Container, Col, Row } from 'react-bootstrap'
import Main from './Main'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let { count } = this.props
    return (
      <div className="dashboard row d-flex justify-content-center" block>
        <Container>
          <Row>
            <Col xs={5} md={6} sm={5}>
              <Report_Bataan />
            </Col>
            <Col xs={5} md={6} sm={5}>
              <Report_City />
            </Col>
            <Col xs={10} md={12} sm={10}>
              <Report_Barangay />
            </Col>
          </Row>
          <Row></Row>
        </Container>
        )
      </div>
    )
  }
}

export default Dashboard

{
  /* <Linereact location="PSA" legendPosition="bottom"/> */
}
