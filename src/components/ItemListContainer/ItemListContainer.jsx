import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PRODUCTS } from "../../Product";
import { categories } from "../Navbar/Navbar"; // Asegúrate de importar categories desde donde esté definido
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { IDCATEGORIA } = useParams();
  const [productos, setProductos] = useState([]);
  const [categoriaNombre, setCategoriaNombre] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosFiltrados = PRODUCTS.filter(
          (producto) => producto.categoryId == IDCATEGORIA
        );
        setProductos(productosFiltrados);

        // Busca el nombre de la categoría y guárdalo en el estado
        const categoriaEncontrada = categories.find(cat => cat.id == IDCATEGORIA);
        setCategoriaNombre(categoriaEncontrada ? categoriaEncontrada.name : '');

      } catch (error) {
        console.error("Error al obtener productos:", error);
      }

    };
    fetchProductos();
  }, [IDCATEGORIA]); 

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>{categoriaNombre}</h1>
      </div>
      <div className="products">
        <ItemList products={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
