import React,{createContext,useReducer} from 'react';
import Navbar from "./components/Navbar";
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Work from "./components/Work";
import MyStocks from "./components/MyStocks";
import Logout from "./components/Logout";
import Text from "./text";
import {reducer,initialState} from "../src/reduser/useReducer";
import "./Styles/App.css";

export const users= createContext();
const Render = () =>{
  return(
    <Switch>
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
    <Route path="/Logout">
      <Logout/>
    </Route>
    <Route path="/text">
      <Text/>
    </Route>
    </Switch>
  ) 
}

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <users.Provider value={{state,dispatch}}>
    <Navbar/>
    <Render/>
    </users.Provider>
    
    </>
  )
}

export default App
