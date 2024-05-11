import React from "react";
// Importa Link desde la biblioteca de React Router
 import { Link } from "react-router-dom";

function ProductosCard({ product }) {
  return (
    <>
      <article className='card'>
        <img src={product.img} alt={product.name} />
        <h4>{product.name}</h4>
        <p>{product.precio}</p>
        <p>{product.relevancia}</p>
      <Link to={`/productos/${product.id}?name=${product.name}&image=${product.img}&relevancia=${product.relevancia}&precio=${product.precio}`}> 
         <button className="more-info-link">Más info</button> 
        </Link>  
      </article>
    </>
  );
}

export default ProductosCard;

