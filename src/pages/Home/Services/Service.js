import React from 'react';
import { Image } from 'react-bootstrap';

const Service = ({ serve }) => {
    const { name, picture, description, available, phone } = serve;
    return (
        <div>
            <div class="col">
                <div class="card bg-light">

                    <Image className="card-img-top" src={picture} thumbnail roundedCircle />
                    <div class="card-body">
                        <h3 class="card-title">Dr.{name}</h3>
                        <h6 class="card-text text-success">Available:{available}</h6>
                        <p> {description}</p>
                        <h5 className="text-danger">Call us:{phone}</h5>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Service;