import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import BusketsPage from "./pages/buskets";
import Layout from "./common/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/busket" element={<BusketsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
