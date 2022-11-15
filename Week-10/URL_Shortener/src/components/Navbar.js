import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <>
        <div id='nav'>
            <h1>ShortIt</h1>
            <div id='menu'>
            <Link to="/" className='menutxt'>Home</Link>
            <Link to="/Contact Us" className='menutxt'>Contact Us</Link>
            <Link to="/About" className='menutxt'>About me</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar