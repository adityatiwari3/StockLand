import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import img from "../Images/contact.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { users } from "../App";
import "../Styles/Feedback.css";
function Feedback(props) {

    const [msg, setMsg] = useState({
        CCode: "",
        Phone: "",
        Email: "",
        // Maywecontact: "",
        // Contype: "",
        Meassage: ""
    })
    const history = useHistory();
    const { state, dispatch } = useContext(users)
    //const [Ccode,setCcode] = useState();
    // const [Phone,setPhone] = useState();





    const checking = async (e) => {
        try {
            const res = await fetch('/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setMsg({ ...msg, Email: data.Email, Phone: data.Phone, });
            if (!res.status === 200) {
                throw new Error(res.error);
            }
            dispatch({ type: "USER", payload: true })
            // main code goes here of authentication for massage

        } catch (err) {
            dispatch({ type: "USER", payload: false })
            //history.push("/Login");
        }
    }
    useEffect(() => {
        checking();
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])
    const handelInput = (e) => {
        const Name = e.target.name;
        const Value = e.target.value
        setMsg({ ...msg, [Name]: Value })
    }
    const sendData = async (e) => {
        e.preventDefault();
        const {CCode, Phone, Email, Meassage} = msg;
        const res = await fetch("/Feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CCode, Phone, Email,  Meassage
            })
        })
        const data =await res.json();
        if(!data){
            console.log("message not send");
        }else{
            alert("message send succesfully")
            setMsg({...msg,Meassage:""})
        }
    }
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <h1 data-Aos="zoom-in-right" id="feedback-section">Send Us Your Feedback</h1>
                </div>
                <div className="col-12 col-lg-7 offset-lg-1">
                    <form method="POST">
                        <div className="row form-group  mt-3">
                            <label data-Aos="fade-up" data-Aos-delay="100" for="mobnum" className="col-12 col-md-3 col-form-label"><h6>Contact No.</h6></label>
                            <div data-Aos="fade-up" data-Aos-delay="100" className="col-4 col-md-2 offset-md-2">
                                <input type="text" className="form-control" id="countrycode"
                                    name="CCode"
                                    value={msg.CCode}
                                    onChange={handelInput}
                                    placeholder="c. code" />
                            </div>
                            <div data-Aos="fade-up" data-Aos-delay="100" className="col-8 col-md-5">
                                <input type="tel" className="form-control" id="Mobnum"
                                    name="Phone"
                                    value={msg.Phone}
                                    onChange={handelInput}
                                    placeholder="Mob. number"
                                />
                            </div>
                        </div>
                        <div className="from-group row mt-3">
                            <label data-Aos="fade-up" data-Aos-delay="200" for="emailid" className="col-12 col-md-3 col-form-label"><h6>Email</h6></label>
                            <div data-Aos="fade-up" data-Aos-delay="200" className="col-12 col-md-7 offset-md-2">
                                <input type="email" className="form-control" id="email"
                                    name="Email"
                                    value={msg.Email}
                                    onChange={handelInput}
                                    placeholder="enter your email"
                                />
                            </div>
                        </div>
                        {/* <div className="from-group row  mt-3">
                            <div className="col-9 col-md-6 offset-md-3 mt-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="approve"
                                        name="Maywecontact"
                                        value={msg.Maywecontact}
                                        onChange={handelInput}

                                    />
                                    <label className="form-check-label" for="approve">
                                        <strong>May we contact you?</strong>
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 col-md-3">
                                <select className="form-control">
                                    <option>Mob.</option>
                                    <option>Email</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="form-group row mt-3">
                            <label data-Aos="fade-up" data-Aos-delay="300" for="feedback" className="col-md-3 col-form-label"><h6>Your Feedback</h6></label>
                            <div data-Aos="fade-up" data-Aos-delay="300" className="col-md-9">
                                <textarea className="form-control" id="feedback" rows="5"
                                    name="Meassage"
                                    value={msg.Meassage}
                                    onChange={handelInput}
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <div data-Aos="fade-up" data-Aos-delay="400" className="offset-md-3 col-md-9">
                                <button type="submit" className="btn btn-primary"
                                    onClick={sendData}
                                >Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <div data-Aos="fade-up" className="">
                        <img src={img} alt="" className="contact_img"/>
                    </div>
                </div>
            </div>
            <div className="row mt-5"></div>

        </>
    )
}

export default Feedback
