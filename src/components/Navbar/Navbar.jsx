import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Sys.png';
import './Navbar.css'

const categories = [
    { id: 1, name: 'Services on demand' },
    { id: 2, name: 'Lading Pages' },
    { id: 2, name: 'Social Media' },

  ];
export const Navbar = () => {
    return <div className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>            
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