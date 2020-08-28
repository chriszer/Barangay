import React, { Component } from 'react'
import Card from './Cards/CardUI'
import './Cards/card-style.css'
// import img1 from "../images/logo_psa.png";
// import img2 from "../images/dfa.png";
// import img3 from "../images/Pagibig.png";
// import img4 from "../images/Philhealth.png";
// import img5 from "../images/NBI.png";
// import img6 from "../images/SSS.png";

import img1 from '../images/calaylayan.png'
import img2 from '../images/bantan.png'
import img3 from '../images/cataning.png'
import img4 from '../images/cupang_proper.png'
import img5 from '../images/limay.png'
import img6 from '../images/dangcol.png'

import { Button } from 'react-bootstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

class Home extends Component {
  render() {
    return (
      <div class="container my-container">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
                justifyContent="center"
                animationDuration="1000"
              >
                <Flippy
                  flipOnHover={true} // default false
                  flipDirection="horizontal"
                >
                  <FrontSide animationDuration="1000">
                    <Card
                      footer="Calaylayan"
                      imgsrc={img1}
                      h7="0xed9d02e382b34818e88B88a309c7fe71E65f419d1"
                    ></Card>
                  </FrontSide>
                  <BackSide animationDuration="1000">
                    <Card
                      paragraph="The Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                    />
                  </BackSide>
                </Flippy>
              </Flippy>
            </div>

            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
              >
                <FrontSide animationDuration="1000">
                  <Card
                    footer="Bantan"
                    imgsrc={img2}
                    h7="0x88937B72856b89e4DAF79bf554EAb39dB186CC36"
                  />
                </FrontSide>
                <BackSide animationDuration="1000">
                  <Card
                    paragraph="the Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                  />
                </BackSide>
              </Flippy>
            </div>

            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
              >
                <FrontSide animationDuration="1000">
                  <Card
                    footer="Cataning"
                    imgsrc={img3}
                    h7="0x6F107A7242F8c28Fe3dE64A704a24B9C00bF5373"
                  />
                </FrontSide>
                <BackSide animationDuration="1000">
                  <Card
                    paragraph="The Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                  />
                </BackSide>
              </Flippy>
            </div>

            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
              >
                <FrontSide animationDuration="1000">
                  <Card
                    footer="Cupang Proper"
                    imgsrc={img4}
                    h7="0xC489BF715A1f3E7461b2b4A4800A119b1B784829"
                  />
                </FrontSide>
                <BackSide animationDuration="1000">
                  <Card
                    paragraph="The Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                  />
                </BackSide>
              </Flippy>
            </div>
            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
              >
                <FrontSide animationDuration="1000">
                  <Card
                    footer="Luz"
                    imgsrc={img5}
                    h7="0x760a39394d21baF375EF6A97bc3FD5B3993E6299"
                  />
                </FrontSide>
                <BackSide animationDuration="1000">
                  <Card
                    paragraph="The Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                  />
                </BackSide>
              </Flippy>
            </div>

            {/* <div className="col-md-4 col-xs-5">
              <Flippy
               flipOnHover={true} // default false
               flipDirection="horizontal">
                <FrontSide animationDuration="1000">  
                  <Card footer="NBI" imgsrc={img5}/>
                </FrontSide>
                <BackSide animationDuration="1000">
                <Card paragraph="The National Bureau of Investigation is an agency of the Philippine government under the Department of Justice, responsible for handling and solving major high-profile cases that are in the interest of the nation."/>
                </BackSide>
               </Flippy>
            </div> */}

            <div className="col-md-4 col-xs-5">
              <Flippy
                flipOnHover={true} // default false
                flipDirection="horizontal"
              >
                <FrontSide animationDuration="1000">
                  <Card
                    footer="Dangcol"
                    imgsrc={img6}
                    h7="0x96027786A8Ad3463C700c11E17FCc7E52aF190dE"
                  />
                </FrontSide>
                <BackSide animationDuration="1000">
                  <Card
                    paragraph="The Barangay serves as the
primary planning and implementing unit of government policies, plans, programs, projects, and
activities in the community, and as a forum wherein the collective views of the people may be
expressed, crystallized and considered, and where disputes may be amicably settled."
                  />
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
