import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import GoogleLogin from 'react-google-login'
import { users } from "../App";
import "../Styles/Registration.css";
const Registration = () => {
    const { state, dispatch } = useContext(users)

    const history = useHistory();

    const [user, serUser] = useState({
        Name: "", Email: "", Phone: "", UserName: "", Password: "", CPassword: ""
    })

    let Name, value;
    const setdata = (e) => {
        Name = e.target.name;
        value = e.target.value;
        serUser({ ...user, [Name]: value });
    };

    const postdata = async (e) => {
        e.preventDefault();
        const { Name, Email, Phone, UserName, Password, CPassword } = user;
        const res = await fetch("/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name, Email, Phone, UserName, Password, CPassword
            })
        });
        const data = await res.json();
        if (!data) {
            window.alert("invalid credential");
        }
        else {
            window.alert("registration succesfull");
            history.push("/Login");
        }
    }

    const responseSuccesGoogle = async (response) => {
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
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("login succesfull");
            history.push("/Home");
        }

    }
    const responseErrorGoogle = (response) => {
        //window.alert("invalid credential");
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5 mx-auto">
                        <div className="my-form form">
                            <div className="mb-3">
                                <div className="col-md-12 text-center">
                                    <h1 id="login-tag">Registration</h1>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                    </div>
                                </div>
                            </div>
                            <form method="POST">
                                <div className="form-group">
                                    <p className="text-center ">already have an account? <NavLink to="/Login" id="signup" className="text-decoration-none">Login</NavLink></p>
                                </div>
                                <div className="row mt-4">

                                    <div className="col-12 text-center">

                                        <GoogleLogin
                                            clientId="129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <a onClick={renderProps.onClick} disabled={renderProps.disabled} className=" btn btn-lg btn-google">Login with  <i class="fa fa-google"></i></a>
                                            )}
                                            buttonText="Login"
                                            onSuccess={responseSuccesGoogle}
                                            onFailure={responseErrorGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5"></div>
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5"></div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" name="Name" className="form-control" id="Name" aria-describedby="NameHelp"
                                        value={user.Name}
                                        onChange={setdata}
                                        placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="Email" className="form-control" id="Email" aria-describedby="EmailHelp"
                                        value={user.Email}
                                        onChange={setdata}
                                        placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Contact No.</label>
                                    <input type="number" name="Phone" className="form-control" id="Phone" aria-describedby="PhoneHelp"
                                        value={user.Phone}
                                        onChange={setdata}
                                        placeholder="Enter Mobile No." />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" name="UserName" className="form-control" id="UserName" aria-describedby="UserNameHelp"
                                        value={user.UserName}
                                        onChange={setdata}
                                        placeholder="Enter Username" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" name="Password" id="Password" className="form-control" aria-describedby="PasswordHelp"
                                        value={user.Password}
                                        onChange={setdata}
                                        placeholder="Enter Password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Confirm Password</label>
                                    <input type="password" name="CPassword" className="form-control" id="CPassword" aria-describedby="CPasswordHelp"
                                        value={user.CPassword}
                                        onChange={setdata}
                                        placeholder="Enter Password again" />
                                </div>
                                <div className="form-group">
                                    <p className="text-center">By signing up you accept our <a href="#" className="text-decoration-none">Terms Of Use</a></p>
                                </div>
                                <div className="col-md-12 text-center mt-3">
                                    <button type="submit" className=" btn  mybtn btn-primary tx-tfm" onClick={postdata}>Register</button>
                                </div>
                                {/* <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5"></div>
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5"></div>
                                </div>
                                <div className="row">

                                    <div className="col-12 text-center">

                                        <GoogleLogin
                                            clientId="129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <a onClick={renderProps.onClick} disabled={renderProps.disabled} className=" btn btn-lg btn-google">Login with  <i class="fa fa-google"></i></a>
                                            )}
                                            buttonText="Login"
                                            onSuccess={responseSuccesGoogle}
                                            onFailure={responseErrorGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p className="text-center ">already have an account? <NavLink to="/Login" id="signup" className="text-decoration-none">Login</NavLink></p>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row mt-5"></div>
            </div>
        </>
    );
}
export default Registration;