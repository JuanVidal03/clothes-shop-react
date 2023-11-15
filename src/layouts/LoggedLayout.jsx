// import components
import NavBar from "../components/navBar/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";

const LoggedLayout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer/>
        </div>
    );
}

export default LoggedLayout;