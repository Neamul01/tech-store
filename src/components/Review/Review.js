// import React, { useContext } from 'react';
// import { ReviewContext } from '../../App';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div>
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