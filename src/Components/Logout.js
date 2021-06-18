import React, { useEffect,useContext} from 'react'
import {useHistory} from "react-router-dom";
import {users} from "../App";
function Logout() {

    const {state,dispatch} = useContext(users)
    const history = useHistory();

    useEffect(()=>{
        fetch('/Logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            history.push('/Login')
            if(res.status != 200)
            {
                throw new Error(res.error);
            }
        }).catch((err) =>{
            console.log(err);
        })
    })

    return (
        <>
            
        </>
    )
}

export default Logout
