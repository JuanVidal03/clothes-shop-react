import "./productCard.css"
// import react router dom
import { Link } from "react-router-dom";
// import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({product, productUrl}) => {
    return (
        <Link to={`/product/${productUrl}`}>
            <div className="productCard-container">
                <figure className="productCard-imgConatiner">
                    <img src={product.image} alt="" />
                </figure>
                <div className="productCard-infoContainer">
                    <h6>{product.title}</h6>
                    <p>{product.category}</p>
                    <div className="priceCart-container">
                        <p>$ {product.price} USD</p>
                        <FontAwesomeIcon className="cartIcon" icon={faCartShopping}/>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
