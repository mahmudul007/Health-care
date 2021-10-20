import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ serve }) => {
    const { name, _id, picture, description, available, phone } = serve;
    return (
        <div>
            <div className="col">
                <div className="card bg-light">

                    <Image className="card-img-top" src={picture} thumbnail roundedCircle />
                    <div className="card-body">
                        <h3 className="card-title">Dr.{name}</h3>
                        <h6 className="card-text text-success">Available:{available}</h6>
                        <p> {description}</p>
                        <h5 className="text-danger">Call us:{phone}</h5>
                        <NavLink
                            to={`/single/${_id}`}


                        >Detail</NavLink>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Service;