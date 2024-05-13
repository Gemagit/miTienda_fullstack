import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ProductContext } from '../../../context/ProductContext';
import ListaProductos from '../ListaProductos';

function SearchProductosFabricantes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setProductList } = useContext(ProductContext);
  //const [newState, setNewState] = useState(null);


  useEffect(() => {
    const initProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products?limit=10&page=1`);
        const data = response.data;
        console.log("a")
        setProductList(data);
      } catch (error) {
        console.log('Error al buscar productos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    initProducts();
  }, []);


/*  useEffect(() => {
    const newData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products?limit=10&page=1&searchterm=${searchTerm}`);
        setProductList(response.data)
        //setNewState(response.data)
      } catch (error) {
        console.log('Error al recuperar datos adicionales:', error);
      } finally {
        setIsLoading(false);
        setSearchTerm()
      }
    };
    newData()
  }, [newState]);  */

  useEffect(() => {
    const newData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products?limit=10&page=1&searchterm=${searchTerm}`);
        setProductList();
      } catch (error) {
        console.log('Error al recuperar datos adicionales:', error);
      } finally {
        setIsLoading(false);
      }
    };
    newData();
  }, [searchTerm]); // Dependencia cambiada a 'searchTerm'


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
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


