import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import ProductosCard from "./ProductosCard";
import PaginationList from '../PaginationList';

function ListaProductos() {
  const { productList } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [orden, setOrden] = useState('');
  const [tipoOrden, setTipoOrden] = useState('asc');

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
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleOrdenarPor = (campo) => {
    const comparador = (a, b) => {
      if (campo === 'nombre') {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (tipoOrden === 'asc') {
          return nombreA < nombreB ? -1 : 1;
        } else {
          return nombreA < nombreB ? 1 : -1;
        }
      } else if (campo === 'precio') {
        let valorA = parseFloat(a.precio.replace('€', '').replace(',', ''));
        let valorB = parseFloat(b.precio.replace('€', '').replace(',', ''));
        if (tipoOrden === 'asc') {
          return valorA - valorB;
        } else {
          return valorB - valorA;
        }
      } else {
        // Campo de relevancia
        if (tipoOrden === 'asc') {
          return a.relevancia - b.relevancia;
        } else {
          return b.relevancia - a.relevancia;
        }
      }
    };

    const productosOrdenados = [...products].sort((a, b) => {
      return comparador(a, b);
    });

    setProducts(productosOrdenados);
    setOrden(campo);
  };

  return (
    <>
      <article className='order'>
        <select className='orderby' onChange={(e) => handleOrdenarPor(e.target.value)}>
          <option value="">Ordenar por...</option>
          <option value="nombre">Nombre</option>
          <option value="relevancia">Rating</option>
          <option value="precio">Precio</option>
        </select>
        <select className='orderasc' onChange={(e) => setTipoOrden(e.target.value)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </article>
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
        totalPages={3} 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default ListaProductos;
