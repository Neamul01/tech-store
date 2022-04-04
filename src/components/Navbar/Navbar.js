import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='mb-4 p-8 shadow bg-gray-100 text-right navbar-custom' >
            <Link to={'/home'}>Home</Link>
            <Link to={'/reviews'}>Reviews</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'about'}>About</Link>
        </nav>
    );
};

export default Navbar;