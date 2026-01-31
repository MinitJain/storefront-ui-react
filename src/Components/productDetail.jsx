import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productData, loading, error } = useProducts();

  if (loading) return <div className="centerMessage">Loading product…</div>;
  if (error)
    return <div className="centerMessage">Unable to load product.</div>;

  const productId = Number(id);
  const product = productData.find((p) => p.id === productId);

  if (!product) return <div className="centerMessage">Product not found.</div>;

  return (
    <div className="detailWrap">
      <button className="backButton" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="detailCard">
        <div className="detailImage">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detailInfo">
          <h2 className="detailTitle">{product.title}</h2>
          <div className="detailCategory">{product.category}</div>
          <div className="detailPrice">${product.price}</div>
          <p className="detailDescription">{product.description}</p>
          <div className="detailMeta">
            Rating: {product.rating?.rate ?? "-"} • {product.rating?.count ?? 0}{" "}
            reviews
          </div>
          <div className="actions">
            <button className="primary">Buy now</button>
            <button className="ghost">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
