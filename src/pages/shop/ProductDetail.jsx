import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {id}</p>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
};

export default ProductDetail;
