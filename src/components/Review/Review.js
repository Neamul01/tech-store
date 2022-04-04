// import React, { useContext } from 'react';
// import { ReviewContext } from '../../App';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div className='flex flex-wrap justify-center bg-slate-50'>
            <h2 className="text-4xl text-orange-500 my-4 py-4 mb-16" style={{ borderBottom: '3px solid orange' }}>What Our Customers Says..</h2>
            {
                reviews.map(review => <ReviewCart
                    review={review}
                    key={review._id}
                    width={'700px'}
                ></ReviewCart>)
            }
        </div>
    );
};

export default Review;