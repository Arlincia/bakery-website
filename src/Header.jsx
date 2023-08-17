import { Button } from "bootstrap";
import "./AboutPage";
import "./Homepage";
import "./MenuPage";
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <div>
        <div className="header">
            <h1>The Sweet Tooth Fairy Bakery</h1>
            <br/>
         </div>
        <div className="links">
           <nav>
            <button> <Link to="/" className="homebtn">Home</Link></button>
           <button><Link to="/about" className="aboutbtn">About Us</Link></button>
            <button><Link to="/menu" className="menubtn">Menu</Link></button>
          </nav>
        </div>
    </div>
    )
}
export default Header;