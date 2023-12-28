import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../../Product";
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
        
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const product = PRODUCTS.find(product => product.id === parseInt(id));
        if (product) {
            setItem(product);
        } else {
            console.error(`No se encontró el producto con ID ${id}`);
        }
    }, [id]);

    if (!item) {
        return <div>Producto no encontrado.</div>;
    }

    return (
        <div className="item-container">
            <div className="title-item item-continer-son">
                <h2>{item.productName}</h2>
            </div>
            <div className="item-container-son">
                <img src={item.productImage} alt="" className="item-image"/>
                <p>{item.description}</p>
                <div className="item-container-son"><p>${item.price}</p></div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;