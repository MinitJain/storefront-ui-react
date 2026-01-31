import "./App.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/productDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
