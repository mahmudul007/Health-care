import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css'


const Booking = () => {
    return (
        <div className="back">
            <div className="text-center mt-5 ">
                <form className="form">

                    <h1 className="fs-3 mb-3">Please book</h1>
                    <label htmlFor="email" className="sr-only"></label>
                    <input type="email" className="form-control" name="" id="email" placeholder="enter email" /><br />
                    <input type="text" className="form-control" name="" id="" placeholder="doctorname" /><br />
                    <input type="time" className="form-control" name="" id="" placeholder="time" /><br />
                    <Link to="/care"> <button className="btn btn-success">Book</button></Link>

                </form>
            </div>
        </div>
    );
};

export default Booking;