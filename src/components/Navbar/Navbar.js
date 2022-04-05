import React from 'react';
import './Navbar.css'
import img from '../../logo.png'
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between shadow bg-gray-100 text-right p-2' >
            <CustomLink to='/'><img className='w-24 m-0 p-0 ml-4' src={img} alt="" /></CustomLink>
            <div className=' flex'>
                <CustomLink className=' navbar-custom' to='/home'>Home</CustomLink>
                <CustomLink className=' navbar-custom' to='/reviews'>Reviews</CustomLink>
                <CustomLink className=' navbar-custom' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className=' navbar-custom' to='/blogs'>Blogs</CustomLink>
                <CustomLink className=' navbar-custom' to='about'>About</CustomLink>
            </div>
        </nav>
    );
};

export default Navbar;