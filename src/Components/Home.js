import React,{useEffect,useContext} from 'react'
import {useHistory} from "react-router-dom";
import {user} from "../App";
import Footer from "./Footer";
function Home() {


    const {state,dispatch} = useContext(user)


    const history = useHistory();


    const checking = async () =>{
        try{
            // console.log("cheking 1")
            const res = await fetch('/Home',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            
            // console.log("cheking 2")
            // console.log(res.status)

            // const data = 0;
            const data = await res.json();
            // console.log(data);
            // console.log("cheking 3")
            if(!res.status === 200)
            {
                // console.log("cheking 4")
                // history.push("/Login");
                throw new Error(res.error);
            }
            // console.log("cheking 5")
            dispatch({type:"USER",payload:true})
        }catch(err) {
            // console.log(err);
            dispatch({type:"USER",payload:false})
           // history.push("/Login");
            // console.log("cheking 6")
        }
    }

    useEffect(() => {
        checking();
    }, [])


    return (
        <>
            <h1>Lorem ipsum dolor, sit amet consectetur lorw adipisicing elit. Quis id eaque nulla odit. Quia consectetur consequatur autem aliquam qui, non ab, ex delectus saepe voluptatibus molestiae nihil necessitatibus, dolore beatae! welcome to Home</h1>
            <Footer/>
        </>
    )
}

export default Home
