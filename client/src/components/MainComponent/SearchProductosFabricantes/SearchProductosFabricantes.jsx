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
      const response = await axios.get("http://localhost:5000/api/products?limit=10&page=1");
      const data = response.data;
  
      const newProduct = {
        id: data.id,
        name: data.name,
        img: data.img,
        relevancia: data.relevancia,
        precio: data.precio,
        descripcion: data.descripcion,
        tejido: data.tejido,
        made:data.made
      };
     
      // Use the useContext hook to access the current list of Pokemon
      setProductList(prevList => {
        // Check if the Pokemon already exists in the list based on its id
        const exists = prevList.some(product => product.id === newProduct.id);
        if (exists) {
          alert("El producto ya esta en la lista");
          return prevList; // Return the unchanged list if the Pokemon is already there
        } else {
          return [...prevList, newProduct]; // Add the new Pokemon to the list
        }
      });
  
    } catch (error) {
      console.log('Ese Producto no existe');
    } finally {
      setIsLoading(false);
      setSearchTerm(''); // Clear the input after search
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

export default SearchProductosFabricantes;
