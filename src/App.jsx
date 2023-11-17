// import styles
import './App.css'
// import pages
import Home from './pages/Home/Home.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import Login from './pages/LogIn/Login.jsx';
import Products from './pages/products/Products.jsx';
//import dependencies
import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {

  // generating routes
  const AppRoutes = () => {
    const router = useRoutes([
      { path: "/", element: <Home /> },
      { path:"/product/:id", element:<ProductDetail/> },
      { path:"/login", element:<Login/> },
      { path:"/products", element:<Products/> },
    ])

    return router;
  }

  return (
    <>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
