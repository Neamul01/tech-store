import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './ReviewCart.css'

const ReviewCart = ({ review }) => {
    const { name, description, rating, picture } = review
    return (
        <div className='flex justify-center items-center m-4 p-8 bg-white rounded-lg shadow-lg' style={{ width: '650px' }}>
            <div>
                <img className='w-full rounded-full' style={{ width: '60rem' }} src={picture} alt="" />
            </div>
            <div className='text-left ml-4'>
                <h3 className="text-3xl text-orange-400 mb-4">{name}</h3>
                <p className=''>{description}</p>
                <p className='text-orange-300 font-bold mt-4'><ReactStars
                    count={rating}
                    size={24}
                    color="#ffd700"
                /></p>
            </div>
        </div >
    );
};

export default ReviewCart;