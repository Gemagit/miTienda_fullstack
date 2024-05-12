/* import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from '../../../context/ProductContext';
import ListaProductos from '../ListaProductos';

function SearchProductosFabricantes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setProductList } = useContext(ProductContext);

  const searchProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/api/products?limit=10&page=1`);
      const data = response.data;
      
      setProductList(data); // Actualiza la lista de productos con los datos obtenidos de la API
  
    } catch (error) {
      console.log('Error al buscar productos:', error);
    } finally {
      setIsLoading(false);
      setSearchTerm(''); // Limpia el término de búsqueda después de la búsqueda
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      searchProduct(searchTerm);
    }
  }


  return (
    <section className='sectionsearch'>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar producto o fabricante"
        />
        <button type="submit">Buscar</button>
      </form>
      <ListaProductos />
    </section>
  );
}

export default SearchProductosFabricantes; */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from '../../../context/ProductContext';
import ListaProductos from '../ListaProductos';

function SearchProductosFabricantes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setProductList } = useContext(ProductContext);

  const searchProduct = async (searchTerm) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/api/products?limit=10&page=1&searchTerm=${searchTerm}`);
      const data = response.data;
      
      setProductList(data); // Actualiza la lista de productos con los datos obtenidos de la API
  
    } catch (error) {
      console.log('Error al buscar productos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      searchProduct(searchTerm);
    }
  }

  return (
    <section className='sectionsearch'>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar producto o fabricante"
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ListaProductos />
      )}
    </section>
  );
}

export default SearchProductosFabricantes;
