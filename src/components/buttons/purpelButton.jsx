// import dependecies
import { Link } from "react-router-dom";

const PurpleButton = ({url, text}) => {
    return (
        <Link to={url} className="purpleButton button">
            {text}
        </Link>
    );
}

export default PurpleButton;
