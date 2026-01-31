import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const productData = useContext(ProductDataContext);

  const { id } = useParams();
  console.log(id);

  let selectedProduct = "";

  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => elem.id == id);
    console.log(selectedProduct);
  }

  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <h5>${selectedProduct.price}</h5>
      </div>
    </div>
  );
};

export default ProductDetail;
