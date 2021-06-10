import React from 'react'
import Navbar from "./components/Navbar";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Work from "./components/Work";
import MyStocks from "./components/MyStocks";
import "./Styles/App.css";
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
    <Route path="/Registration">
      <Registration/>
    </Route>
    <Route path="/Work">
      <Work/>
    </Route>
    <Route path="/MyStock">
      <MyStocks/>
    </Route>
    
    </>
  )
}

export default App
