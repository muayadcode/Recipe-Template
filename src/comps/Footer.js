import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from '../images/logo.png';
import "../App.css";


//FOOTER



function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
        <Col lg={3} md={4} sm={6} className="footer-white-left-side"> {/* Added className="align-left" */}
            <div className="">
              <ul className="footer-list">
                <li><a href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/contact-the-barrett-centre" className="font-weight-bold font-size-1-25em text-dark">About Us</a></li>
                <li><a href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/faqs" className="text-dark">FAQ's</a></li>
                <li><a href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/information-access-and-privacy" className="text-dark">Information Access & Privacy</a></li>
              </ul>
            </div>
         </Col>

          <Col   md={8} sm={6}>
            <div className="footer-green-right-side">
              <Row>
                <Col md={6}>
                  <div>
                    <h1 className="small">Barrett Centre Ajax Urban Farm</h1>
                    <p>144 Rossland Rd E.</p>
                    <p>Ajax, ON, Canada L1T 4V2</p>
                    <h1 className="small">DC Whitby Campus Urban Farm</h1>
                    <p>1610 Champlain Avenue</p>
                    <p>Whitby, ON, Canada L1N 6A7</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center">
                    <img src={logo} className="p-3 img-fluid" alt='Durham Logo' />
                    <p className="texts font-size-0-75em text-light">Copyright Durham College 2024</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
