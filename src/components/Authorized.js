import React, { Component } from 'react';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './Layout';
import { NavigationBar } from './NavigationBar';

class Authorized extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default Authorized;
