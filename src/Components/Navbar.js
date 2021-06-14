import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import image from "../Images/logo_brand.png";
import { user } from "../App";
import "../Styles/Navbar.css";
function Navbar() {

  const { state, dispatch } = useContext(user)

  const RenderMenu = () => {
    if (!state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus"><span className="fa fa-info fa-lg"></span> Aboutus</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login"><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="modal" data-target="#" to="/Registration"><span className="fa fa-user-plus fa-lg"></span> Register</NavLink>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus"><span className="fa fa-info fa-lg"></span> Aboutus</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Work"><span className="fa fa-briefcase fa-lg"></span> Work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="modal" data-target="#" to="/Logout"><span className="fa fa-user-plus fa-lg"></span> Logout</NavLink>
          </li>
        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar  navbar-expand-lg  fixed-top">

        <NavLink className="navbar-brand" to="#"><img src={image} alt="" className="nav-logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>

        </div>
      </nav>

    </>
  )
}

export default Navbar
