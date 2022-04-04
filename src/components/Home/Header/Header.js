import React from 'react';
import headerImg from '../GalaxyS22_Ultra.png'


const Header = () => {
    return (
        <div className='grid grid-cols-2 m-2 pt-8'>
            <div>
                <img className='w-full' src={headerImg} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <h2 className='text-5xl mb-8 text-orange-400'>Samsung Galaxy S22 Ultra</h2>
                    <p className="text-2xl m-3">Your Favourite Phone</p>
                    <p className=" m-3">It have many amazing features, You will love those.Your next choice is comming.</p>
                    <button className="border m-4 p-4 rounded-lg bg-orange-400 text-white font-bold hover:bg-orange-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Header;