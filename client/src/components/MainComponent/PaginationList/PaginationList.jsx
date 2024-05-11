/* import { useState, useEffect, Fragment } from 'react';
import ListaProductos from '../ListaProductos';
import {
  useContacts,
 
  sortOrder
} from '../../../context/ProductContext'; 

function PaginationList()  {
  //* CONTEXTAPI
  //Bring in custom hook
  const [productState, productDispatch] = useContacts();
  //destructure setter of custom hook to use state variable through out component
  const { products } = productState;

  // LOCAL STATE FOR SORTING
  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const [isProductCode, setIsProductCode] = useState(false);

  useEffect(() => {
    if (products === null) {
      getAllProducts(productDispatch);
    }

    // SORTING ORDERS
    // --------------------------
    sortOrder(productDispatch, filterOrders());

    return () => {};
  }, [productDispatch, isAscending, isDescending, isProductCode]);

  //*SORTING FUNCTIONS AND LOGIC

  const filterOrders = () => {
    const dataArr = products;

    // ASCENDING LOGIC
    if (isAscending) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING LOGIC
    if (isDescending) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.lastName < b.lastName ? 1 : b.lastName < a.lastName ? -1 : 0
      );
      return searchDescArr;
    }

    // COUNTRY CODE LOGIC
    if (isProductCode) {
      const searchProductCodeArr = dataArr.sort((a, b) =>
        a.productCode > b.productCode
          ? 1
          : b.productCode > a.productCode
          ? -1
          : 0
      );
      return searchProductCodeArr;
    }
    return products;
  };
  
  return (
    <Fragment>
      <div>
        <h1 className='text-sm text-center leading-relaxed m-3'>
          Search by first name, last name or email
        </h1>
        <div className='dropdown dropdown-hover'>
          <label tabIndex='0' className='btn-xs btn-secondary btn m-1'>
            Sort
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <button
                onClick={(e) => {
                  setIsAscending(true);
                  setIsDescending(false);
                  setIsCountryCode(false);
                }}>
                Last Name A-Z
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setIsDescending(true);
                  setIsAscending(false);
                  setIsCountryCode(false);
                }}>
                Last Name Z-A
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setIsCountryCode(true);
                  setIsDescending(false);
                  setIsAscending(false);
                }}>
                Product Code
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center m-3 sm:flex-wrap sm:flex-row '>
        {isAscending
          ? products.map((productItem) => (
              <ProductosDetalles contactItem={productItem} key={productItem._id} />
            ))
          : isDescending
          ? contacts.map((productItem) => (
              <ProductosDetalles key={productItem._id} productItem={productItem} />
            ))
          : isProductCode
          ? products.map((productItem) => (
              <ProductosDetalles key={productItem._id} productItem={productItem} />
            ))
          :  <ListaProductos />}
       
      </div>
    </Fragment>
  );
};


export default PaginationList; */

import React from "react";

const PaginationList = () => {
  return <div></div>;
};

export default PaginationList;