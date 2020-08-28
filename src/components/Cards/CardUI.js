import React, { Component, useState, useEffect } from 'react'
import './card-style.css'
import {
  Button,
  Modal,
  ButtonToolbar,
  ButtonGroup,
  Form,
  Spinner,
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

//Button to show MODAL
function App() {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])
  const handleClick = () => setLoading(true)

  return (
    <ButtonToolbar>
      <Link to={'/form'}>
        <Button
          className="btn"
          variant="outline-success"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? 'Loading…' : 'Click to Continue'}{' '}
        </Button>
      </Link>
    </ButtonToolbar>
  )
}

class Card extends Component {
  state = {
    hidden: false,
  }

  onSubmit = () => {
    return <Redirect to="/About" />
  }
  state = {
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {
    const { loading } = this.state

    //rendering the UI card
    return (
      //Card attributes with this.props for the details of the different agencies.
      <div className="card text-center shadow-lg dragEnabled:true">
        <div className="overflow">
          <h5 className="card-footer">{this.props.footer}</h5>
          <p className="card-body text-center text-dark">
            {this.props.paragraph}
          </p>
          <ButtonGroup>
            <App />
          </ButtonGroup>
        </div>

        <div className="card-title text-dark text-center">
          <img src={this.props.imgsrc} className="card-img-top" />
          <h7>{this.props.h7}</h7>
        </div>
      </div>
    )
  }
}

export default Card
