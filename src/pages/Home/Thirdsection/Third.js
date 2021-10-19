import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Third = () => {
    return (

        <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container >


                <Navbar.Brand className="p-5"><p>Pharmacy Suppliers:</p></Navbar.Brand>
                <Navbar.Brand className="p-5"><h3>Phizer</h3></Navbar.Brand>
                <Navbar.Brand className="p-5"><h3>Squire</h3></Navbar.Brand>



            </Container>
        </Navbar>
    );
};

export default Third;