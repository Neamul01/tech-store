// import React, { useContext } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import Header from './Header/Header';
// import { ReviewContext } from '../../App'
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';

const Home = () => {
    // const reviews = useContext(ReviewContext)
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    const homeShowedReviews = reviews.slice(0, 3)
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
                <Link to={'/reviews'} ><button className="border px-4 py-3 mt-4 rounded-lg bg-orange-500 text-white font-bold">View All Review</button></Link>
            </div>

        </div>
    );
};

export default Home;