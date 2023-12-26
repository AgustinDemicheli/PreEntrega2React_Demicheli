import React from "react";
import { PRODUCTS } from "../../Product";
import { Product } from './Products'
import "./shop.css"
export const Shop = () => {
    return <div className="shop">
        <div className="shopTitle">
            <h1>Sync Set Solutions</h1>
        </div>
        <div className="products">
            {" "}
            {PRODUCTS.map((product)=> (
                <Product data={product} />
        ))}</div>
    </div>
}