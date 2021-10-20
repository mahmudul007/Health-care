import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import logo from '../../images/logo/medical-logo.jpg';
import './Header.css'

const Header = () => {
    const { user, sighnOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Image className="img " src={logo} thumbnail ></Image>

                    <Navbar.Brand as={Link} to="/home" className="px-5">HOME</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/service">SERVICE</Nav.Link>
                        <Nav.Link as={Link} to="/booking">BOOKING</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/doctor">DOCTOR LIST</Nav.Link>


                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <Button onClick={sighnOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <br />



        </>
    );
};

export default Header;