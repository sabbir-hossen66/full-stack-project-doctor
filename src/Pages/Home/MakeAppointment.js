import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: ` url(${appointment})` }} className='flex justify-center items-center px-10 my-25 rounded'>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-160px]" src={doctor} alt="" />
            </div>
            <div className='flex-1 my-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-white'>Make An Appointment Today</h2>
                <p className='text-3xl text-white pb-3'>This doctor is qualitiful beacuse he always want to good treatment every patient.in friday the doctor want to help people whose are suffering from many diseases and poor people </p>
                <PrimaryButton>Get Starts</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;