import React, { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/ProductApi";

export const ProductDataContext = createContext();

const productContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    setProductData(await getAllProductData());
  };

  useEffect(function () {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default productContext;
