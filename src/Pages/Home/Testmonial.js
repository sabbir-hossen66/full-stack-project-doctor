import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testmonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winso Herry",
            reivew: "this chember is so good",
            location: "california",
            img: people1



        },
        {
            _id: 2,
            name: "Winso Herry",
            reivew: "this chember is so good",
            location: "location",
            img: people2


        },
        {
            _id: 3,
            name: "Winso Herry",
            reivew: "this chember is so good",
            location: "location",
            img: people3

        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">TestiMonial</h4>
                    <h2 className='text-3xl'>What Our Patient Say</ h2>
                </div>
                <div>
                    <img className='w-48 sm:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 gap-10 my-10'>
                {
                    reviews.map(review => <Review
                        key={review._id} review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testmonial;