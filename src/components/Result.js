import React, { Component, useState } from 'react'
import { ProgressBar, Badge } from 'react-bootstrap'
import { Button, Modal, ModalDialog } from 'react-bootstrap'
import Flash from 'react-reveal/Flash'
import { Checkmark } from 'react-checkmark'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { easeQuadInOut } from 'd3-ease'
// import AnimatedProgressProvider from './Animated';
import ChangingProgressProvider from './ChangingProgressProvider.js'
import { Card } from 'react-bootstrap'
import { Table } from 'reactstrap'
import './Result.css'
import imgalert from '../images/alert.png'
import Main from './Main.js'
import question from '../images/question.png'
import mismatch from '../images/alert.png'
import { Container, Row, Col } from 'react-grid-system'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'
import { data1 } from './Data/data.js'

const Prog = () => (
  <div style={{ width: '200px' }}>
    <ChangingProgressProvider values={[0, 100]}>
      {(percentage) => (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathTransition:
              percentage === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
          })}
        />
      )}
    </ChangingProgressProvider>
  </div>
)

function AlertDismissible(props) {
  const [show, setShow] = useState(true)

  let {
    latest_b1,
    latest_b1_result,
    latest_b2_result,
    latest_b3_result,
    latest_b4_result,
  } = props

  const [count, setCount] = useState(0)

  // Filter for PSA
  let b1_false_count = 0
  for (let b = 0; b < latest_b1_result.length; b++) {
    if (latest_b1_result[b] === false) {
      b1_false_count++
    }
  }

  if (b1_false_count === 6) {
    for (let b = 0; b < latest_b1_result.length; b++) {
      latest_b1_result[b] = <img src={question} width="40" height="40" />
    }
    setCount(count + b1_false_count)
  } else {
    for (let b = 0; b < latest_b1_result.length; b++) {
      if (latest_b1_result[b] === true)
        latest_b1_result[b] = <Checkmark size={40} />
      else if (latest_b1_result[b] === false)
        latest_b1_result[b] = <img src={mismatch} width="40" height="40" />
    }
  }

  // Filter Ended for PSA

  //End Hash Condition for PSA

  //Filter for NBI
  let b4_false_count = 0
  for (let b = 0; b < latest_b4_result.length - 1; b++) {
    if (latest_b4_result[b] === false) {
      b4_false_count++
    }
  }

  if (b4_false_count === 6) {
    for (let b = 0; b < latest_b4_result.length - 1; b++) {
      latest_b4_result[b] = <img src={question} width="40" height="40" />
    }
  } else {
    for (let b = 0; b < latest_b4_result.length; b++) {
      if (latest_b4_result[b] === true)
        latest_b4_result[b] = <Checkmark size={40} />
      else if (latest_b4_result[b] === false)
        latest_b4_result[b] = <img src={mismatch} width="40" height="40" />
    }
  }

  //  filter for hit ,clear or empty on nbi
  let b4_user_status = ''

  if (latest_b4_result[6] === 'clear') b4_user_status = null

  if (latest_b4_result[6] === 'hit') {
    b4_user_status = (
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>ALERT</ToastHeader>
          <ToastBody>
            <strong className="mr-auto">Duplicate Record</strong>
          </ToastBody>
        </Toast>
      </div>
    )
  }
  console.log(b4_false_count)

  // Filter Ended for NBI

  return (
    <>
      <br></br>
      {/* <Checkmark size={40}/> <img src={mismatch} width="40" height="40" /> */}
      <br></br>
      <div style={{ marginLeft: '50px' }} class="float-md-left">
        <Badge variant="info">
          <Flash>
            <div>
              <h2 style={{ textAlign: 'center' }}>Legend</h2>
            </div>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Checkmark size={30} />
                  </td>
                  <td>
                    <h5>Correct</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={mismatch} width="35" height="35" />
                  </td>
                  <td>
                    <h5>Alert</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={question} width="35" height="35" />
                  </td>
                  <td>
                    <h5>Empty</h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Flash>
        </Badge>
      </div>
      <div class="row d-flex justify-content-center">
        <ModalDialog bg="dark">
          <Modal.Body>
            <Modal.Title>
              <h3>
                {' '}
                {count === 6
                  ? 'No record found in any of the barangay'
                  : latest_b1[5]}
              </h3>
            </Modal.Title>
            <Flash>
              {/* <ProgressBar animated now={99} variant="success"/> */}
              {/* {count === 6 ? 'No' : latest_b1_result[0]} */}
              <Table>
                <tbody>
                  <tr>
                    <td>{latest_b1_result[0]}</td>
                    <td>
                      <h6>First Name</h6>
                    </td>
                    <td>{latest_b1_result[2]}</td>
                    <td>
                      <h6>Last Name</h6>
                    </td>
                    <td>{latest_b1_result[1]}</td>
                    <td>
                      <h6>Middle Name</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>{latest_b1_result[3]}</td>
                    <td>
                      <h6>Date of Birth</h6>
                    </td>
                    <td>{latest_b1_result[4]}</td>
                    <td>
                      <h6>No of Children</h6>
                    </td>
                    <td>{latest_b1_result[5]}</td>
                    <td>
                      <h6>Address</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Flash>
          </Modal.Body>
        </ModalDialog>

        {latest_b4_result[6] === 'hit' ? (
          <ModalDialog bg="dark">
            <Modal.Body>
              {b4_user_status}
              <Modal.Title>
                <h3>Cataning, Balanga</h3>
              </Modal.Title>
              <Flash>
                {/* <ProgressBar animated now={99} variant="success"/> */}

                <Table>
                  <tbody>
                    <tr>
                      <td>{latest_b4_result[0]}</td>
                      <td>
                        <h6>First Name</h6>
                      </td>
                      <td>{latest_b4_result[2]}</td>
                      <td>
                        <h6>Last Name</h6>
                      </td>
                      <td>{latest_b4_result[1]}</td>
                      <td>
                        <h6>Middle Name</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>{latest_b4_result[3]}</td>
                      <td>
                        <h6>Date of Birth</h6>
                      </td>
                      <td>{latest_b4_result[4]}</td>
                      <td>
                        <h6>No. of Children</h6>
                      </td>
                      <td>{latest_b4_result[5]}</td>
                      <td>
                        <h6>Address</h6>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Flash>
            </Modal.Body>
          </ModalDialog>
        ) : null}
      </div>
      {/* // </div> */}
      &nbsp;&nbsp;&nbsp;
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  )
}

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let {
      datas1,
      latest_b1,
      latest_b1_result,
      latest_b2_result,
      latest_b3_result,
      latest_b4_result,
    } = this.props

    return (
      <div className="dashboard text-center" variant="dark">
        <AlertDismissible
          latest_b1={latest_b1}
          latest_b1_result={latest_b1_result}
          latest_b2_result={latest_b2_result}
          latest_b3_result={latest_b3_result}
          latest_b4_result={latest_b4_result}
        />
      </div>
    )
  }
}

export default Main(Result)
