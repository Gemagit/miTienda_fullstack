/* import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import ProductosCard from "./ProductosCard";
  
  function ListaProductos() {
    const { productList } = useContext(ProductContext);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const resp = await fetch(`http://localhost:5000/api/products?limit=10&page=1`)
          const data = await resp.json();
          // Guarda en el array de productos el resultado. Procesa los datos
          setProducts(data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      getProduct();
    }, []); // Array vacío para que se ejecute solo una vez al montar el componente
  
    return (
      <>
        <ul className="listaProductos">
          {products.length !== 0 ?
            products.map((product, i) => (
              <li key={i}>
                <article className='listacard'>
                  <span>{product.name}</span>
                  <img src={product.img}></img>
                  <p>Relevancia: {product.relevancia}</p>
                  <p> {product.precio}</p>
                </article>
              </li>
            ))
            : <p>cargando...</p>}
        </ul>
      </>
    );
  }
  
  export default ListaProductos; */

  import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import ProductosCard from "./ProductosCard";

function ListaProductos() {
  const { productList } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resp = await fetch(`http://localhost:5000/api/products?limit=10&page=1`)
        const data = await resp.json();
        // Guarda en el array de productos el resultado. Procesa los datos
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    getProduct();
  }, []); // Array vacío para que se ejecute solo una vez al montar el componente

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
    </>
  );
}

export default ListaProductos;

  
  