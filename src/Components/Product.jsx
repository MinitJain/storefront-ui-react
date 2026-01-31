import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const Product = () => {
  const { productData, loading, error } = useProducts();

  if (loading) return <div className="centerMessage">Loading products…</div>;
  if (error)
    return <div className="centerMessage">Unable to load products.</div>;
  if (!productData || productData.length === 0)
    return <div className="centerMessage">No products available.</div>;

  return (
    <div className="productGrid">
      {productData.map((item) => (
        <Link className="productCard" key={item.id} to={`/product/${item.id}`}>
          <div className="productImageWrap">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="productBody">
            <h3 className="productTitle">{item.title}</h3>
            <div className="productPrice">${item.price}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
