import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Sys.png';
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

export const categories = [
    { id: 1, name: 'Services on demand' },
    { id: 2, name: 'Landing Pages' },

  ];
export const Navbar = () => {
    return <div className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>            
            <div className="links">
                <Link to="/shop">SHOP</Link>
                <Link to="/">BLOG</Link>
                <Link to="/">ABOUT</Link>
                <div className="categories-dropdown">
                <span>PRODUCTS</span>
                <div className="categories-list">
                    {categories.map(category => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            activeclassname="active"
          >
            {category.name}
          </Link>
                    ))}
                </div>
                </div>
                <Link to="/cart"> 
                        <CartWidget/>
                </Link>
                
            </div>
        </div>
};