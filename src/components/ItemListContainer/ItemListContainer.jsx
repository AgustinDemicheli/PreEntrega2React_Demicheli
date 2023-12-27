import React from "react";
import { PRODUCTS } from "../../Product";
import "./ItemListContainer.css"
import Item from "./Item/Item";
import {Link} from 'react-router-dom';
export const ItemListContainer = () => {
    return <div className="shop">
        <div className="shopTitle">
            <h1>Sync Set Solutions</h1>
        </div>
        <div className="products" >
            {" "}
            {PRODUCTS.map((product)=> {
                return (
                <div style={{margin:10}} key={product.id}>
                    <Link>
                        <Item char={product} />
                    </Link>
                </div>)
        })}</div>
    </div>
}

export default ItemListContainer;