// import styles
import "./products.css";
// react hooks
import { useState, useEffect, } from "react";
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

    // products state
    const [categories, setCategories] = useState([]);
    // state that manage
    const [selectCat, setSlectCat] = useState("");
    // render products
    const [products, setProducts] = useState([]);

    // all products
    useEffect(() => {
        const allProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        allProducts();
    }, []);

    // add styles to active item
    const clickEvent = (e) => {

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

    };

    // rendering products depending the category name
    useEffect(() => {

        const renderProductsByCategory = async () => {

            if (selectCat === "ELECTRONICS") {
                const data = await getProductsByCategory(selectCat.toLowerCase());
                setProducts(data);
            } else if (selectCat === "JEWELERY") {
                const data = await getProductsByCategory(selectCat.toLowerCase());
                setProducts(data);
            } else {
                const data = await getAllProducts();
                setProducts(data);
            }
        };
        renderProductsByCategory();
    }, []);

/*
    - falta autenticar formularios con formik
    - hacer que funione el filtro de productos
    - usar context para pasar los datos del login al nav
*/


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
                        <p
                            onClick={clickEvent}>
                            {category}
                        </p>
                    </div>
                ))}
            </div>
            {/* renderizando los productos de pendiendo de la categoria */}
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