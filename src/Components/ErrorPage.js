import React from 'react'
import { NavLink } from 'react-router-dom';
import err from "../Images/error_page.png";
import "../Styles/ErrorPage.css";

function ErrorPage() {
    return (
        <>
            <div className="container error">
                <div className="row">
                    <div className="col-12 d-grid">
                        <img src={err} alt="" className="error-page"/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <button className="btn btn-lg error-btn">
                        <NavLink to="/" className="text-decoration-none link-light"> Back To HomePage</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
