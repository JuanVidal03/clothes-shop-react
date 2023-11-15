// styles
import "./logIn.css";
// import components
import LogInForm from "../../components/logInForm/LogInForm.jsx";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form-back"></div>
            <div className="login-form-container">
                <LogInForm/>
            </div>
        </div>
    );
}

export default Login;
