// import styles
import "./products.css";
// react hooks
import { useState, useEffect } from "react";
// import components
import LoggedLayout from "../../layouts/LoggedLayout.jsx";
// import dependecies
    
// import services
import { getCategories } from "../../services/apiActions.js";

const Products = () => {

    // products state
    const [categories, setCategories] = useState([]);

    // add styles to active item
    const clickEvent = (e) => {
        const p = e.target;
        const activeP = p.innerText;
        const categoriesP = document.querySelectorAll('.category p');
        
        categoriesP.forEach((cat) => {
            if (cat.innerText == activeP) {
                p.classList.add('active');
            } else {
                cat.classList.remove('active');
            }
       })

    }

    useEffect(() => {

        const renderData = async () => {
            try {

                const data = await getCategories();
                setCategories(data);

            } catch (error) {
                console.log(error);
            }
        }
        renderData();

    }, []);


    return (
        <LoggedLayout>
            <div className="hero-single-product">
                <h1>Product Categories</h1>
            </div>
            <div className="categories-container">
                {
                    categories.map((category, index) => (
                        <div className="category" key={categories[index]}>
                            <p onClick={clickEvent}>{category}</p>
                        </div>
                    ))
                }
            </div>
        </LoggedLayout>
    );
}

export default Products;