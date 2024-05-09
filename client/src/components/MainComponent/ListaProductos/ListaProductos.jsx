import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import ProductosCard from "./ProductosCard";

const ListaProductos = () => {
  const { productList } = useContext(ProductContext);

  return (
    <>
      {productList.length > 0 ? (
        <article >
          {productList.map((product,i) => (
            <ProductosCard product={product} key={i}/>
          ))}
        </article>
      ) : null}
    </>
  );
};

export default ListaProductos;
