import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductosDetalles() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const img = params.get('img');
  const relevancia = params.get('relevancia');
  const precio = params.get('precio');
  const descripcion = params.get('descripcion');
  const tejido = params.get('tejido');
  const made = params.get('made');
  const estrella = "⭐";

  return (
    <>
    <article className='details'>
        <h3>{name}</h3>
        <p>{precio}</p>
        <img src={img} alt={name} />
        <p>{estrella}{relevancia}</p>
        <p>{descripcion}</p>
        <p>Tejido: {tejido}</p>
        <p>Made in {made}</p>
    </article>
    <Link to="/">
    <button className='buttonDetails'>Volver a la página principal</button> 
  </Link>
  </>
  );
}

export default ProductosDetalles;
