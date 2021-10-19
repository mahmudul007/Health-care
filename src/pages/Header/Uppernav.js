import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Uppernav = () => {
    return (
        <Container>
            <Navbar variant="light" bg="light" sticky="top" collapseOnSelect expand="lg"  >
                <Container>
                    <h1 className="fs-1 ">Smile Dental Care</h1>
                    <p>Mn - St: 8:00am - 9:00pm, Sunday: CLOSED</p>
                    <Navbar.Brand className="fs-1">Call us : 012544</Navbar.Brand>


                </Container>
            </Navbar>
        </Container>
    );
};

export default Uppernav;