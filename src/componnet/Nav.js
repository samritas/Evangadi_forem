import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it
import './Nav.css'

function NavBar({isSignIn}) {
  return (
    <div className='nav'>
    <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" alt="Evangadi Logo" />
    <div className='nav_contents'>
      <Link to="/how">Home</Link>
      <Link to="/how-it-works">How it Works</Link>
      {isSignIn ? (
        <button className='signin-button'>Sign In</button>
      ) : (
        <button  className='signin-button' >LogOut</button>
      )}
    </div>
  </div>
  );
}

export default NavBar;


