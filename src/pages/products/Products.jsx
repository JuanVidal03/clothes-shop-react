// import styles
import "./products.css";
// react hooks
import { useState, useEffect } from "react";
// import components
import LoggedLayout from "../../layouts/LoggedLayout.jsx";
import ProductCard from "../../components/productCard/productCard.jsx";
// import services
import {
  getCategories,
  getProductsByCategory,
  getAllProducts,
} from "../../services/apiActions.js";

const Products = () => {
  document.title = "Products | Juan Vidal";

  // products state
  const [categories, setCategories] = useState([]);
  // state that manage the select category
  const [selectCat, setSlectCat] = useState("");
  // render products
  const [products, setProducts] = useState([]);
  // getting the query param
  const [queryParam, setQueryParam] = useState("");

  // rendering products depending the category name
  useEffect(() => {
    const renderProductsByCategory = async () => {
      if (queryParam == "ELECTRONICS") {
        const data = await getProductsByCategory(selectCat.toLowerCase());
        setProducts(data);
      } else if (queryParam == "JEWELERY") {
        const data = await getProductsByCategory(selectCat.toLowerCase());
        setProducts(data);
      } else if (queryParam == "MEN%27S+CLOTHING") {
        const data = await getProductsByCategory(selectCat.toLowerCase());
        setProducts(data);
      } else if (queryParam == "WOMEN%27S+CLOTHING") {
        const data = await getProductsByCategory(selectCat.toLowerCase());
        setProducts(data);
      } else {
        const data = await getAllProducts();
        setProducts(data);
      }
    };

    renderProductsByCategory();
  }, [queryParam]);

  // manage click events
  const clickEvent = (e) => {
    // add styles to clicked link
    const p = e.target;
    const activeP = p.innerText;
    setSlectCat(activeP);
    const categoriesP = document.querySelectorAll(".category p");

    categoriesP.forEach((cat) => {
      if (cat.innerText == activeP) {
        p.classList.add("active");
      } else {
        cat.classList.remove("active");
      }
    });

    // change url to render new content
    const urlHref = new URL(window.location.href); // get the url
    const activeCat = p.innerText; // get teh active category
    urlHref.searchParams.set("category", activeCat); // set the query param
    const queryParamSearch = urlHref.search.split("=");
    const activeQueryParam = queryParamSearch[1];
    setQueryParam(activeQueryParam);
  };

  // render categories names
  useEffect(() => {
    const renderData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderData();
  }, []);

  return (
    <LoggedLayout>
      <div className="hero-single-product">
        <h1>Product Categories</h1>
      </div>
      {/* renderizando el nombre de las categorias */}
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category" key={categories[index]}>
            <p onClick={clickEvent}>{category}</p>
          </div>
        ))}
      </div>
      {/* renderizando los productos dependiendo de la categoria */}
      <div className="products-page-container">
        <div className="products-container container">
          {products.map((product) => (
            <ProductCard
              productUrl={product.id}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </LoggedLayout>
  );
};

export default Products;