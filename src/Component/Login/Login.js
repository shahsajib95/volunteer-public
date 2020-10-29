import React, { useContext } from 'react';
import './Login.css';
import google from '../../logos/google.png'
import logo from '../../logos/Group 1329.png'
import { googleSignIn, initializeFirebaseApp, userToken } from './auth';
import { LoggedIn } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    initializeFirebaseApp()
    
    const [loggenIn, setLoggedIn] = useContext(LoggedIn);
    let history = useHistory(); 
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const logInWithgoogle = () =>{
        googleSignIn()
        .then(res=>{
        setLoggedIn(res)
        userToken()
        history.replace(from);
        })
    }
    return (
        <div className="text-center">
            <Link to="/"><img className="w-25 align-items-center" src={logo} alt="logo"/></Link>
            <div className="login text-center p-5">
                <h3>Login With</h3>
                <button className="btn-white d-flex align-items-center google-box form-control p-4 mt-5" onClick={logInWithgoogle}>
                    <img src={google}alt=""/><p className="text-center ml-5">Continue with Google</p>
                </button>
                <p className="mt-2"> Don't have account? <u style={{color: '#3F90FC', cursor: 'pointer'}}> Create Account</u></p>
            </div>
        </div>
    );
};

export default Login;