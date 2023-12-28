import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-container">
      <div className="title-item item-continer-son">
        <h2>{item.productName}</h2>
      </div>
      <div className="item-container-son">
        <img src={item.productImage} alt="" className="item-image" />
        <p>{item.description}</p>
        <div className="item-container-son">
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
