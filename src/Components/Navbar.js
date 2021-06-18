import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import image from "../Images/logo_brand.png";
import img from "../Images/increase_logo.png";
import { users } from "../App";
import "../Styles/Navbar.css";
function Navbar() {

  const { state, dispatch } = useContext(users)

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
            <div className="dropdown  mt-2">
              <a className="dropdown-toggle" id="dropdownMenuOffse" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                <img src={img} alt="" className="rounded-circle" loading="lazy" style={{ height: 29 }} />
              </a>
              <div className="dropdown-menu text-center dropdown-menu-right" aria-labelledby="dropdownMenuOffse">
                <NavLink className="nav-link" data-toggle="modal" data-target="#" to="/Profile"><span className="fa fa-user fa-lg">  </span>  Profile</NavLink>
                <NavLink className="nav-link" data-toggle="modal" data-target="#" to="/MyStock"><span className="fa fa-book fa-lg"></span>  MyStocks</NavLink>
                <hr />
                <NavLink className="nav-link logout_link" data-toggle="modal" data-target="#" to="/Logout" ><span className="fa fa-sign-out fa-lg"></span>  Logout</NavLink>
              </div>
            </div>
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
