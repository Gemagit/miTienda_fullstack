import { useState } from 'react'
import './App.css'
import "./styles/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from './context/ProductContext';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";

function App() {
  const [productList, setProductList] = useState([]);//aquí voy a almacenar la lista de los productos
  //Este es el levantamiento de estado. App es el provider.

  return (
    <>
      <Router>
        <ProductContext.Provider value={{ productList, setProductList }}>
          <Header />
          <MainComponent />
          <Footer />
        </ProductContext.Provider>
      </Router>
    </>
  )
}

export default App
