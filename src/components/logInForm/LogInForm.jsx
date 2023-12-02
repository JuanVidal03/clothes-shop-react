// import styles
import './logInForm.css'
// import dependecies
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
// import context
import { useContext } from 'react';
import { ProfileNameContext } from '../../context/ProfileNameContext';

const LogInForm = () => {

    const navigate = useNavigate();
    // use context
    const profileNameContext = useContext(ProfileNameContext);

    return (
        <div className="form-container">
            <Formik
                initialValues={{
                    user: '',
                    pass: ''
                }}
                onSubmit={(values) => {
                    profileNameContext.setUserName(values.user);
                    navigate('/');
                }}
                validate={(values) => {
                    const errors = {};
                    // username validation
                    if (!values.user) {
                        errors.user = 'Debes ingresar un nombre de usuario.';
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user)){
                        errors.user = 'El usuario solo debe tener letras y espacios.';
                    }
                    // pass valdiation
                    if (!values.pass) errors.pass = 'Debes ingresar la contraseña.';
                    return errors;
                }}
            >
                {({ touched, errors}) => (

                    <Form>
                        <div className="card">
                            <p className="login">¡Bienvenido de nuevo!</p>
                            <div className="inputBox">
                                <Field 
                                    type="text"
                                    id='user' 
                                    name='user'/>
                                <span className="user">Usuario</span>
                                <ErrorMessage name='user' component={() => (
                                    <div className='form-errors'>{errors.user}</div>
                                )}/>
                            </div>

                            <div className="inputBox">
                                <Field 
                                    type="password" 
                                    name='pass' 
                                    id='pass'/>
                                <span>Contraseña</span>
                                <ErrorMessage name='pass' component={() => (
                                    <div className='form-errors'>{errors.pass}</div>
                                )}/>
                            </div>

                            <button className="enter" type='submit'>Ingresar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LogInForm;
