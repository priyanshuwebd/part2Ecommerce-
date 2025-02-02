import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import search_icon from '../assets/search_icon.png';
import profile_icon from '../assets/profile_icon.png';
import cart_icon from '../assets/cart_icon.png';


const Navbar = () => {

    const [showOptions, setShowOptions] = useState(false) //use to toggle visibility of the tag p

    return (
        <div className='navbar flex justify-between items-center py-4 px-6'>

            <img src={logo} className='logo' alt='logo' />


            <ul className='flex space-x-6'>
                <NavLink to='/' className='navlink'>
                    <p>HOME</p>
                    <hr />
                </NavLink>
                <NavLink to='/collection' className='navlink'>
                    <p>COLLECTION</p>
                    <hr />
                </NavLink>
                <NavLink to='/about' className='navlink'>
                    <p>ABOUT</p>
                    <hr />
                </NavLink>
                <NavLink to='/contact' className='navlink'>
                    <p>CONTACT</p>
                    <hr />
                </NavLink>
            </ul>

            <div className='search-icon'>
                <img
                    src={search_icon}
                    alt='opps'

                />
            </div>

            <div className='profile-icon'>
                <img
                    src={profile_icon}
                    alt='opps'
                    className='cursor-pointer'
                    onClick={() => setShowOptions(!showOptions)}
                />

                {showOptions && (
                    <div className='dropdown-options'>
                        <p>My profile</p>
                        <p>Orders</p>
                        <p>Logout</p>


                    </div>
                )}
            </div>

            <Link to="/cart" className="cart-container">
                <img src={cart_icon}
                    alt="Cart"
                    className="cart-icon" />
                <p className="cart-badge">10</p>
            </Link>










        </div>
    );
};
export default Navbar;


