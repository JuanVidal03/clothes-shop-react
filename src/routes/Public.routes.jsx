// import dependencies
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import lazy pages
const Home = lazy(() => import('../pages/Home/Home.jsx'));
const ProductDetail = lazy(() => import('../pages/ProductDetail/ProductDetail.jsx'));
const Login = lazy(() => import('../pages/LogIn/Login.jsx'));
const Products  = lazy(() => import('../pages/products/Products.jsx'));

const PublicRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </Suspense>
  );
}

export default PublicRoutes;