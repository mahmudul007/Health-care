import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doc }) => {
    const { name, picture, available } = doc;
    return (

        <div>
            <div class="col">
                <div class="card bg-light">

                    <Image className="card-img-top" src={picture} thumbnail roundedCircle />
                    <div class="card-body">
                        <h3 class="card-title">Dr.{name}</h3>
                        <h6 class="card-text text-success">Available:{available}</h6>
                        <Link to="/booking">  <button className="btn btn-success">Book Now</button></Link>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Doctor;