import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homeHero">
      <div className="heroInner">
        <h1 className="heroTitle">Discover modern essentials</h1>
        <p className="heroSubtitle">
          Curated selection of premium goods, simplified shopping.
        </p>
        <div className="heroActions">
          <button className="primary" onClick={() => navigate("/product")}>
            Shop products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
