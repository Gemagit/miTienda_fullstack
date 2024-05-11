import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import ProductosCard from "./ProductosCard";
import PaginationList from '../PaginationList';

function ListaProductos() {
  const { productList } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getProducts = async (page) => {
    try {
      const resp = await fetch(`http://localhost:5000/api/products?limit=10&page=${page}`);
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProducts(currentPage + 1); // currentPage + 1 porque la API usa páginas basadas en 1
  }, [currentPage]);

  return (
    <>
      <ul className="listaProductos">
        {products.length !== 0 ?
          products.map((product, i) => (
            <li key={i}>
              <ProductosCard product={product} />
            </li>
          ))
          : <p>cargando...</p>}
      </ul>
      <PaginationList 
        totalPages={3} // Define el número total de páginas
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default ListaProductos;


  
  