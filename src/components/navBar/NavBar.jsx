// import styles
import "./navBar.css";
//import dependecies
import { Link } from "react-router-dom";
// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//import components
import LogOut from "../buttons/LogOut.jsx";

const NavBar = () => {
    return (
        <header className="header">
            <nav className="navContainer">
                <ul className="nav">
                    <div className="items-container">
                        <li className="menu-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/products">Productos</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </div>
                    <div className="second-row-nav">
                        <div className="profile">
                            <FontAwesomeIcon className="profile-icon" icon={faUser} />
                            <span>Juan Vidal</span>
                        </div>
                        <div className="logout">
                            <LogOut text='Cerrar Sesión' url='/login'/>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;