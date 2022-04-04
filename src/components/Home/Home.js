import React, { useContext } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import Header from './Header/Header';
import { ReviewContext } from '../../App'

const Home = () => {
    const reviews = useContext(ReviewContext)
    const homeShowedReviews = reviews.splice(0, 3)
    return (
        <div >
            <Header></Header>
            <div className=' bg-gray-100 py-8' >
                <h2 className="text-5xl">Reviews</h2>
                <div className='flex flex-wrap items-center justify-center'>
                    {
                        homeShowedReviews.map(review => <ReviewCart
                            review={review}
                            key={review._id}
                            width="500px"
                        ></ReviewCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;