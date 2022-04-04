import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import img from '../../logo.png'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between shadow bg-gray-100 text-right p-2' >
            <Link to={'/'}><img className='w-24 m-0 p-0 ml-4' src={img} alt="" /></Link>
            <div className=' navbar-custom'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/reviews'}>Reviews</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'about'}>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;