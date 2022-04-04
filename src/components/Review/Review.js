import React, { useContext } from 'react';
import { ReviewContext } from '../../App';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const reviews = useContext(ReviewContext)
    return (
        <div className=''>
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