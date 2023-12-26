import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const categories = [
    { id: 1, name: 'Services on demand' },
    { id: 2, name: 'Lading Pages' },
    { id: 2, name: 'Social Media' },

  ];
export const Navbar = () => {
    return <div className="navbar">
            <div className="links">
                <Link to="/">BLOG</Link>
                <Link to="/">ABOUT</Link>
                <Link to="/shop">SHOP</Link>
                <div className="categories-dropdown">
                <span>PRODUCTS</span>
                <div className="categories-list">
                    {categories.map(category => (
                        <Link key={category.id} to={`/products/${category.id}`} activeClassName="active">
                            {category.name}
                        </Link>
                    ))}
                </div>
                </div>
                <Link to="/cart"> 
                    <ShoppingCart size={23}/>
                </Link>
                
            </div>
        </div>
};