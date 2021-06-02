import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from "react-router-dom";
import logo from "../Images/logo_name.jpg";
const Navbar = () => {
    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-dark ">
  <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="logo" className="nav-logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto link-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/Home"><span className="fa fa-home fa-lg"></span>  Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/Aboutus"><span className="fa fa-info fa-lg"></span>  AboutUs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/Login"><span className="fa fa-sign-in"></span>  Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link e" to="/Register"><span className="fa fa-user-plus"></span>  Register</NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
