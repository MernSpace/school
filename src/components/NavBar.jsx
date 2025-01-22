import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/image/Group 2.png'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-main shadow-sm">
            <Container>
                {/* Logo/Brand */}
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                {/* Navbar Toggle (for mobile) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Collapse (Links + Contact button) */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/facilities">Facilities</Nav.Link>
                        <Nav.Link href="/admission">Admission</Nav.Link>
                    </Nav>

                    {/* Contact Button - Shows inline on desktop, stacked on mobile */}
                    <div className="d-flex">
                        <button className='btn-orange btn text-white px-5 fw-medium' href="/contact">
                            Contact
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;