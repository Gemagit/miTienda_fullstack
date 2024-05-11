import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import SearchProductosFabricantes from "./SearchProductosFabricantes";
import ListaProductos from "./ListaProductos";
import ProductosDetalles from './ProductosDetalles';
import OrderBy from './OrderBy';
import PaginationList from './PaginationList';


function MainComponent({productList, setProductList}){
  
  return (
    <main className="main">
    <Routes>
      <Route path="/" element={<SearchProductosFabricantes productList={productList} setProductList={setProductList}/>} />
      <Route path="/" element={<ListaProductos productList={productList} />} />
      <Route path="/productos/:id" element={<ProductosDetalles />} />
      <Route path="/" element={<OrderBy />} />
      <Route path="/next" element={<PaginationList />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
    <PaginationList/>
  </main>
  );
};

export default MainComponent;
