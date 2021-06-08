import React from 'react'
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className="footer container-fluid flex-end">
                <div className="container-footer">
                    <div className="row mt-5 pt-5">
                        <div className="col-3 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled ">
                                <li><NavLink to="/Home" className="text-decoration-none " style={{fontSize:"17px"}}>Home</NavLink></li>
                                <li><NavLink to="/Aboutus" className="text-decoration-none " style={{fontSize:"17px"}}>Aboutus</NavLink></li>
                                <li><NavLink to="/Work" className="text-decoration-none " style={{fontSize:"17px"}}>Work</NavLink></li>
                                <li><NavLink to="/Logout" className="text-decoration-none " style={{fontSize:"17px"}}>Logout</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-8 col-sm-5">
                            <h5>Our Address</h5>
                            <address>
                                21/31, new saket nagar <br />
                                DurgaKund Varanasi<br />
                                Uttar Pradesh<br />
                                INDIA<br />
                                <i className="fa fa-phone fa-lg"></i> : +852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i> :
                                <a href="mailto:aaditytiwari3@gmail.com" className="text-decoration-none"> aaditytiwari3@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center ">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2021 StockLand</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
