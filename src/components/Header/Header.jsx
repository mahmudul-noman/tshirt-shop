import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
// ============================================================== //

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Order_Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/grandpa">Gradnpa</Link>
        </nav>
    );
};

export default Header;