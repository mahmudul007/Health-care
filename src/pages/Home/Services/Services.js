import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(data => data.json())
            .then(res => setServices(res))

    }, [])
    return (
        <div >
            <h1 className="text-primary mt-5 ">Our Specialist Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 lg-4">
                {
                    services.map(serve => <Service
                        key={serve.id}
                        serve={serve}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;