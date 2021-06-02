import React from 'react'
import Navbar from "./Components/Navbar";
import {Route} from "react-router-dom";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import "./App.css";
const App = () => {
  return (
    <>
    <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/Home">
      <Home/>
    </Route>
    <Route path="/Aboutus">
      <Aboutus/>
    </Route>
    <Route path="/Login">
      <Login/>
    </Route>
    <Route path="/Register">
      <Register/>
    </Route>
    
    </>
  )
}

export default App
