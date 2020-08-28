import React, { Component } from "react";
import logo from "../logo.png";
import Unauthorized from "./Unauthorized";
import Home from "./Home";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { Contact } from "./Contact";
import { Layout } from "./Layout";
import { NavigationBar } from "./NavigationBar";
import { Jumbotron } from "./Jumbotron";
import form from "./Form";
import Result from "./Result";
import About from "./About";
import contact from "./Contact";
import ParticlesBg from "particles-bg";
import Dashboard from "./Dashboard";
import attest from "./AttestationComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Login";
import Signup from "./Signup";
import "./Cards/card-style.css";
class App extends Component {
	constructor(props) {
		//define the navbar is hidden upon running from start
		super(props);
		this.state = {
			isNavbarHidden: false,
		};
	}

	render() {
		//Login page which will show first without the navbar
		const LoginContainer = () => (
			<div>
				<Jumbotron />

				<div className="container">
					<Route exact path="/" component={Login} />
				</div>
			</div>
		);

		//homepage component
		const DefaultContainer = () => (
			<div>
				<NavigationBar />
				<Jumbotron />

				<Layout>
					<Route
						render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									timeout={3000}
									classNames="fade"
								>
									<div>
										<div className="container">
											<Route path="/signup" component={Signup} />
											<Route path="/home" component={Home} />
											<Route path="/about" component={About} />
											<Route path="/contact" component={contact} />
											<Route path="/form" component={form} />
											<Route path="/result" component={Result} />
											<Route path="/dashboard" component={Dashboard} />
											<Route path="/attest" component={attest} />
										</div>
									</div>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</Layout>
			</div>
		);

		return (
			//rendering the components wherein the Login will be the first to run
			<Router>
				<div className="App">
					<ParticlesBg type="cobweb" bg={true} />
					<Switch>
						<Route exact path="/" component={LoginContainer} />
						<Route component={DefaultContainer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
