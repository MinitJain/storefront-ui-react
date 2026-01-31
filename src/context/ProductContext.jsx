import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/ProductApi";

const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllProductData();
        if (mounted) setProductData(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const value = { productData, loading, error };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  if (ctx === null)
    throw new Error("useProducts must be used within ProductContextProvider");
  return ctx;
};
