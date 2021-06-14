import React,{useEffect,useContext, useState} from 'react'
import { NavLink, useHistory} from "react-router-dom";
import OurTeam from "./OurTeam";
import Feedback from "./Feedback";
import Location from "./Location";
import Footer from "./Footer";
import {user} from "../App";
import "../Styles/Aboutus.css";
function Aboutus() {

    const {state,dispatch} = useContext(user)

    const history = useHistory();
    const [Email,setEmail] = useState();
    const [Phone,setPhone] = useState();
    const checking = async () =>{
        try{
            // console.log("cheking 1")
            const res = await fetch('/About',{
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
            setEmail(data.Email)
            setPhone(data.Phone)
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
            //history.push("/Login");
            // console.log("cheking 6")
        }
    }
    //console.log(data)

    useEffect(() => {
        checking();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-12 ">
                        <ol className="col-12 breadcrumb about_bread">
                            <li className="breadcrumb-item "><NavLink to="/Home">Home</NavLink></li>
                            <li className="breadcrumb-item active">Aboutus</li>
                        </ol>
                        <h3 className="about_tag">About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h2 className="about_tag">Our History</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit vero harum doloremque amet aliquid architecto numquam similique nihil delectus exercitationem cu elit. Minima, reprehenderit voluptatem, excepturi ipsa voluptate, et illo adipisci molestias recusandae sed eum quia velit maxime ducimus rem ex explicabo! Libero, voluptas!</p>
                        <p>Lorem ipsum dolorm illum laboriosam, molestiae molestias sapiente voluptatibus nisi explicabo! sit amet consectetur adipisicing elit. Nesciunt voluptatibus magni obcaecati pariat</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="card fact">
                            <h3 className="card-header fact-header text-white">Facts At a Glance</h3>
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">1 Jun. 2021</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">Aditya and Parth.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$00001</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">04</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pt-4">
                        <div className="card card-body qutes">
                            <blockquote className="blockquote">
                                <p className="mb-15">blishing and graphic design, Lorem ipsum is a placeholder text. we have to add qutoes here</p>
                                <footer className="blockquote-footer">Yogi Berra,
                            <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                            P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <OurTeam/>
                <Location/>
                <div className="row text-center pt-3 info-num mt-4">
                    <div className="col-12 col-lg-3 ">
                        <div id="client" className="m-3 mb-4 info-detail">
                            <h3 className="pt-3">Clients</h3>
                            <h5 className="pt-3 pb-3">1111</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div id="downloads" className="m-3 mb-4 info-detail">
                            <h3 className="pt-3">Downloads</h3>
                            <h5 className="pt-3 pb-3">1111</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div id="visited" className="m-3 mb-4 info-detail">
                            <h3 className="pt-3">visited</h3>
                            <h5 className="pt-3 pb-3">1111</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div id="contribution" className="m-3 mb-4 info-detail">
                            <h3 className="pt-3">contribution</h3>
                            <h5 className="pt-3 pb-3">1111</h5>
                        </div>
                    </div>
                </div>
                <Feedback email={Email} phone={Phone}/>   
            </div>
            <Footer/>
        </>
    )
}

export default Aboutus
