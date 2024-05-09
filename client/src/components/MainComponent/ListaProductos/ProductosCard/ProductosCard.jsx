import React from "react";
//import Link from "react";

function ProductosCard({ productos }) {
  return (
    <article className='card'>
      <h3>{productos?.name}</h3>
      <img src={productos?.img} alt={productos?.name} />
      <p> {productos?.relevancia}</p>
      <p>{productos?.precio}</p>
      {/*   <Link to={`/productos/${productos.id}?name=${productos.name}&image=${productos.img}&relevancia=${productos.relevancia}&precio=${productos.precio}}`}>
      <button className="more-info-link">Más info</button>
      </Link> */}
    </article>
  );
}

export default ProductosCard;
