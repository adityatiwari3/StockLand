import React, { useState } from 'react';
import GoogleLogin from 'react-google-login'
import {NavLink,useHistory} from "react-router-dom";
import "../Styles/Login.css";


const Login = () => {

    const history = useHistory();
    const [Email,setEmail] = useState();
    const [Password,setPassword] = useState();

    const sendData = async (e) =>{
        e.preventDefault();
        const res = await fetch("/Login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify( {
                Email,Password
            })
        });
        const data = await res.json();

        if(data.status === 400 || !data)
        {
            window.alert("invalid credential");
            console.log("invalid credential");
        }
        else
        {
            window.alert("login succesfull");
            console.log("login succesfull");
            history.push("/Home");
        }
    }
    // const [modal, setModal] = useState(props.bool);


    // const toggle = () => setModal(!modal);
    // const responseGoogle = (response) => {
    //     // var profile = response.getBasicProfile();
    //     // console.log('Email: ' + profile.getEmail()); 
    //     console.log(response);
    //     // console.log(response.profileObj);
    // };
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
                                    onChange={(e)=> setEmail(e.target.value)}
                                    placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="Password" id="Password" className="form-control" aria-describedby="emailHelp" 
                                    value={Password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    placeholder="Enter Password" />
                                </div>
                                {/* <div className="form-group">
                                    <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                                </div> */}
                                <div className="col-md-12 text-center mt-3">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={sendData}>Login</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                    </div>
                                </div>
                                    {/* here you add google login */}
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