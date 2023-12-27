import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../../Product";

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
        <div>
            <h2>{item.productName}</h2>
            <p>{item.description}</p>
            {/* Otros detalles del producto */}
        </div>
    );
};

export default ItemDetailContainer;