import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Carousol/Carosol.css';


import img1 from '../../../images/slider/img1.jpg'
import img2 from '../../../images/slider/img2.jpg'
import img3 from '../../../images/slider/img3.jpg'
import { Link } from 'react-router-dom';

const Carousol = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <Carousel.Caption className="text-center">
                        <h1>OUR HOSPITAL PREMISES</h1>
                        <Link to="/booking">  <button className="btn btn-success" >Make appointment</button></Link>
                    </Carousel.Caption>

                    <img
                        className="d-block  w-100 "
                        height="500"
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        height="500"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="txt-dark">OUR AMBULANCE SERVICE</h1>
                        <p>CALL US 24/7</p>
                        <Link to="/booking">   <button className="btn btn-danger">Appointment</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        height="500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>THIS IS OUR LABRATORY</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousol;