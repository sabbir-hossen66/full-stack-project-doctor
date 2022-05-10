import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/fluoride.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'yes my boy',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'yes my boy',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'yes my boy',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div>
                {
                    services.map(service => <Service
                        key={service._id} service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;