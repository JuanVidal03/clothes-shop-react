// import react router dom
import { Link } from "react-router-dom";

const LogOut = ({url, text}) => {
    return (
        <Link className="log-out-btn" to={url}>
            {text}
        </Link>
    );
}

export default LogOut;
