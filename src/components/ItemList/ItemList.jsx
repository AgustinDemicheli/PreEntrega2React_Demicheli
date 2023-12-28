import React from "react";
import Item from "../Item/Item";
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <Link to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
          <button className="addToCartBttn">Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
