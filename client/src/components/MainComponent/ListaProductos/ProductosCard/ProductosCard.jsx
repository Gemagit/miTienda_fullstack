import React from "react";
 import { Link } from "react-router-dom";

function ProductosCard({ product }) {
  const estrella = "⭐";


  return (
    <>
      <article className='card'>
        <img src={product.img} alt={product.name} />
        <h4>{product.name}</h4>
        <p>{product.precio}</p>
        <p>{estrella} {product.relevancia}</p>
        </article>
      <Link to={`/productos/${product.id}?name=${product.name}&img=${product.img}&relevancia=${product.relevancia}&precio=${product.precio}&descripcion=${product.descripcion}&tejido=${product.tejido}&made=${product.made}`}> 
         <button className="more-info-link">Más info &rarr;</button> 
        </Link> 
    </>
  );
}

export default ProductosCard;

