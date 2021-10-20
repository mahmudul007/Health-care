
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import './Single.css';

const Singleservice = () => {
    let { id } = useParams();
    const [servicess, setServicess] = useState([]);
    const [singleDetails, setSingleDetails] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then(data => data.json())
            .then(res => setServicess(res))

    }, [])
    useEffect(() => {
        const details = servicess.find(serve => serve._id === id);
        setSingleDetails(details);

    }, [servicess])


    return (
        <div className="card text-center single">
            <div className="card-header">
                <h3>Our Service</h3>
            </div>
            <div className="card-body">
                <h5 className="card-title">{singleDetails?.name}</h5>
                <p className="card-text">{singleDetails?.description}</p>
                <a href="#" className="btn btn-primary">Call Us</a>
            </div>
            <div className="card-footer text-muted">
                <p>Always available</p>
            </div>
        </div>
    );
};

export default Singleservice;















