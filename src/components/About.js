import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./About.css";
import ErrorBoundary from "./ErrorBoundary";

class About extends Component {
  render() {
    return (
      <ErrorBoundary>
      <Container>
       
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/Anc.png" className="profile-pic" roundedCircle />

            <h3>Armand N Cajayon</h3>
            <h4>IT Advisory Head, EY PH Blockchain Leader</h4>
            <p>
              Armand has vast and in-depth experience in Technology
              Transformation Programs, covering Technology Strategy,
              Architecture, Infrastructure and Service Resiliency and Technology
              Operations.
            </p>
            <p>
              He has over 30 years of experience handling technology leadership
              positions in both global and local companies.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/chris.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Christoper M San Pedro</h3>
            <h4>IT Development Head</h4>
            <p>
              Christoper has vast and in-depth experience in e-Wallet systems,
              Cryptocurrency Exchange, blockchain, POS, mobile POS, credit card
              payment gateway systems, online remittance and mobile banking
              systems
            </p>
            <p>
              He has over 20 years of experience in the field of
              software/application delivery and integration.He has experience in
              delivering secure and advance financial technology products.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/norbz.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Norbin F Astrero</h3>
            <h4>Innovation Architect</h4>
            <p>
              Norbin has vast and in-depth experience in web and mobile
              system/application design and development, Mobile banking system,
              ERP, mobile POS, payment gateway systems and online remittance.
            </p>
            <p>
              He has over 20 years of experience in the field of Information
              Technology and Software Development.He has experience in
              delivering end to end financial and non-financial applications.
            </p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/Ramil.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Ramil Cantoneros</h3>
            <h4>Blockchain Market Lead</h4>
            <p>
              Ramil has vast and in-depth experience in handling portfolio
              projects like business merger, acquisition, brand divestiture, and
              greenfield projects.
            </p>
            <p>
              He has over 13 years of experience in the field of project
              management and global business services solutions .He lead all
              systems enablement projects in a global finance transformation
              programme of a multinational insurance company.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/Dara.png"
              className="profile-pic"
              roundedCircle
            />

            <h3>Dara Ledda A. Urbiztondo</h3>
            <h4>Innovation head & Technology Risk</h4>
            <p>
              Dara has vast and in-depth experience in conducting IT general
              controls and application system reviews for companies in various
              industries including telecommunications, real estate, financial
              institutions, quick-service restaurants, power generation and
              distribution, and service organizations.Â 
            </p>
            <p>
              She has over 13 years of experience in the field of of IT risk
              assurance and advisory experience.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/Ralph.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Ralph Vincent D Ong</h3>
            <h4>IT Managed Services Head</h4>
            <p>
              Ralph has extensive experience in SAP, Service Now, Intelligent
              Automation, and Enterprise Application Implementations.
            </p>
            <p>
              He has over 16 years of experience in the field of application
              delivery and management, IT operations, project and program
              management. He has managed several IT Outsourcing delivery
              operations for global companies ranging from consumer industry to
              telco.
            </p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/Prem.png"
              className="profile-pic"
              roundedCircle
            />

            <h3>Prem Prasad</h3>
            <h4>Blockchain Solution Architect</h4>
            <p>
              Prem has vast and in-depth experience in developing and delivering
              Decentralized Blockchain applications using Quorum, Ethereum and
              Hyperledger. He Has worked on multiple blockchain projects for
              various industries including banking, consultancy services and
              technology.
            </p>
            <p>
              He has around 10 years of experience in the field of Information
              Technology and Software Development.He has experience in
              blockchain space for providing global business services solutions
              and project development.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/Sean.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Sean Joshua G Zabala</h3>
            <h4>Blockchain Developer</h4>
            <p>
              Sean Joshua has developed different programs and games. He is
              knowledgeable in game developing, website developing and
              blockchain. He has worked into different program using c#, nodejs,
              reactjs, Java, solidity and webrtc.
            </p>
            <p>
              He has 2 years of experience in software development. He has
              developed the entire process of several games and software
              including the designing of sprites and assets.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/chriszer.png"
              className="profile-pic"
              roundedCircle
            />
            <h3>Chriszer Myth G Tamayo</h3>
            <h4>Blockchain Developer</h4>
            <p>
              Chriszer has developed web applications and blockchain web integration,
              a software developer knowledgeable on blockchain, javascript, Java, PHP, webrtc
              and solidity development.
            </p>
            <p>
              He has almost 2 years of experience in software development. He has
              developed web applications and also web enteprise application.
            </p>
          </Col>
        </Row>

      </Container>
      </ErrorBoundary>
    );
  }
}

export default About;