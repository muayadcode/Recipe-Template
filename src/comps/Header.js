import React from 'react';

import "../index.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//HEADER 


function Header() {
    // State for dark mode and mobile view
    return (
        <header>
            <Navbar expand="lg" className="py-4 p-3 navbar navbar-expand-lg " >
                <Container fluid>
                    <Navbar.Brand  href="/">
                        <img
                            src={logo} alt="the durham college and the barrett centre logo"
                            className="logo "
                            style={{ maxHeight: '260px', maxWidth: '260px' }} // Adjust size as needed
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/contact-the-barrett-centre">About Us</Nav.Link>
                            <Nav.Link href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/knowledge-centre">Knowledge Centre</Nav.Link>
                            <Nav.Link href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/login/?ec=302&startURL=%2FSustainableUrbanAgricultureCommunity%2Fs%2Fcommunity-forum">Community Forum</Nav.Link>
                            <Nav.Link href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/login/?ec=302&startURL=%2FSustainableUrbanAgricultureCommunity%2Fs%2Fask-an-expert">Ask an Expert</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item className='navItem' href="https://durhamcollege-barrettcentre.my.site.com/SustainableUrbanAgricultureCommunity/s/blog">Blog</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
