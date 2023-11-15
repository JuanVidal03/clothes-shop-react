// import styles
import './logInForm.css'
// import dependecies
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {

    // redirect to the home page
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <p className="login">¡Bienvenido de nuevo!</p>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span className="user">Usuario</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Contraseña</span>
                    </div>

                    <button className="enter">Ingresar</button>
                </div>
            </form>
        </div>
    );
}

export default LogInForm;
