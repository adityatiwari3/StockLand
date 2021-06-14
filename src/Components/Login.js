import React, { useState, useContext } from 'react';
import GoogleLogin from 'react-google-login'
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { user } from "../App";
import "../Styles/Login.css";




const Login = () => {

    const { state, dispatch } = useContext(user)

    const history = useHistory();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const responseSuccesGoogle = async (response) => {
        console.log(response.tokenId);
        const res = await fetch("/googleLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: response.tokenId
            })
        });
        const data = await res.json();
    
        if (data.status === 400 || !data) {
            window.alert("invalid credential");
            console.log("invalid credential");
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("login succesfull");
            console.log("login succesfull");
            history.push("/Home");
        }
        
    }
    const responseErrorGoogle = (response) => {
        //window.alert("invalid credential");
    }

    const sendData = async (e) => {
        e.preventDefault();
        const res = await fetch("/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Email, Password
            })
        });
        const data = await res.json();

        if (data.status === 400 || !data) {
            window.alert("invalid credential");
            console.log("invalid credential");
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("login succesfull");
            console.log("login succesfull");
            history.push("/Home");
        }
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5 mx-auto">
                        <div className="my-form form">
                            <div className="mb-3">
                                <div className="col-md-12 text-center">
                                    <h1 id="login-tag">Login</h1>
                                </div>
                            </div>
                            <form method="POST">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="Email" className="form-control" id="Email" aria-describedby="emailHelp"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="Password" id="Password" className="form-control" aria-describedby="emailHelp"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Password" />
                                </div>
                                <div className="form-group mt-4">
                                    <p className="text-center">By signing up you accept our <a href="#" className="text-decoration-none">Terms Of Use</a></p>
                                </div>
                                <div className="col-md-12 text-center mt-4">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={sendData}>Login</button>
                                </div>
                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5"></div>
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5"></div>
                                </div>
                                {/* here you add google login */}
                                <div className="row">
                                    {/* <GoogleLogin
                                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />, */}
                                    <GoogleLogin
                                        clientId="129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>login with google</button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={responseSuccesGoogle}
                                        onFailure={responseErrorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />,
                                </div>


                                <div className="form-group">
                                    <p className="text-center ">Don't have account? <NavLink to="/Registration" id="signup" className="text-decoration-none">Create an account</NavLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;