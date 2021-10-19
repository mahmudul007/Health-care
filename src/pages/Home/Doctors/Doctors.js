import React, { useEffect } from 'react';
import { useState } from 'react';
import Doctor from './Doctor';


const Doctors = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('./doctor.json')
            .then(data => data.json())
            .then(res => setDoctor(res))

    }, [])





    return (

        <div className=" " >
            <h1 className="text-primary mt-5 ">Our Specialist Doctors</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 lg-4">
                {
                    doctors.map(doc => <Doctor
                        key={doc.id}
                        doc={doc}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;