// import components
import NavBar from "../components/navBar/NavBar.jsx";
import Footer from "../components/footer/Footer.jsx";
// import context
import ProfileCardContext from "../context/ProfileCardContext.jsx";

const LoggedLayout = ({children}) => {
    return (
        <ProfileCardContext>
            <div>
                <NavBar />
                {children}
                <Footer/>
            </div>
        </ProfileCardContext>
    );
}

export default LoggedLayout;