// import styles
import { useEffect, useState } from "react";
import "./productDetail.css";
// import dependecies
import { useParams } from "react-router-dom";
// import components
import PurpleButton from "../../components/buttons/purpelButton.jsx";
import Loader from "../../components/loader/Loader.jsx";
// import layout
import LoggedLayout from "../../layouts/LoggedLayout.jsx";
// import services
import { getSingleProduct } from "../../services/apiActions.js";

const ProductDetail = () => {

    // loader state
    const [loading, setLoading] = useState(false);

    // getting the id from params
    const { id } = useParams();
    // setting product state
    const [product, setProduct] = useState({});

    // render the product
    useEffect(() => {
        setLoading(true)
        try {
            // render single product
            const renderProduct = async () => {
                const product = await getSingleProduct(id)
                setProduct(product);
                setLoading(false);
                // update title website
                document.title = `${product.data.title} | Juan Vidal`;
            }
            renderProduct();

        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }, [id]);


    return (
        <LoggedLayout>
            <div className="hero-single-product">
                <h1>Single Product</h1>
            </div>

            <div className="detailProduct">
            {
                loading ? (
                    <Loader/>
                ) : (       
                        <div className="detailProduct-container container">
                            <div className="detail-imgContainer">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="detail-infoContainer">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p className="detail-product-price">$ {product.price} USD</p>
                                <PurpleButton text='Añadir al Carrito'/>
                            </div>
                        </div>
                )
            }
            </div>

        </LoggedLayout>
    )
}


export default ProductDetail;