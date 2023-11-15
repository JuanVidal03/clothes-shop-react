import "./buttonStyles.css";
import { Link } from "react-router-dom";

const WhiteButton = ({url, text}) => {
    return (
        <Link className="button whiteButton" to={url}>
            {text}
        </Link>
    );
}

export default WhiteButton;
