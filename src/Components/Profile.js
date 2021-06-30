import React, { useState, useEffect, useContext } from 'react'
import { users } from "../App";
import { useHistory } from "react-router-dom";
import "../Styles/Profile.css"
const Profile = () => {
    const { state, dispatch } = useContext(users)
    const history = useHistory();
    const [Email,setEmail]=useState("Email")
    const [Name, setName] = useState("Name")
    const [UsrName, setUsrName] = useState("UserName");
    const [UsrEmail, setUsrEmail] = useState("Email");
    const [UsrNum, setUsrNum] = useState("PhNumber");
    const [StockCnt, setStockCnt] = useState(0);
    const UpdateData = async () => {
        await fetch(`${Email}/updataData`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                UsrName: UsrName,
                UsrEmail: UsrEmail,
                UsrNum: UsrNum
            })
        })
            .then(res => res.json())

    }
    useEffect(() => {
        const getProfile = async () => {
            await fetch('/Profile', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    setName(data.Name);
                    setUsrName(data.UserName);
                    setEmail(data.Email);
                    setUsrEmail(data.Email);
                    setUsrNum(data.Phone);
                    setStockCnt(data.MyStocks.length)
                    dispatch({ type: "USER", payload: true })
                })
                .catch(err => {
                    dispatch({ type: "USER", payload: false })
                    history.push("/Login");
                })

        }
        getProfile();
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Profile</h1>
                    <hr />
                    </div>
                </div>
                <div className='row Page'>
                    <div className='ex col-12 '>
                        <div className='row'>
                            <div className='col-lg-2   col-md-5 col-9 ImageP'>
                            </div>
                            <div className='col-lg-10 col-12 d-flex flex-column Header'>
                                <div className='row'>
                                    <div className='col-lg-10 col-12'>
                                        <h2 id="Namia">{Name}</h2>
                                        <h4> Web Developer</h4>
                                    </div>
                                    <div className='col-lg-2 col-12'>
                                        <button type="button" className="btn btn-primary edit-btn" data-toggle="modal" data-target="#exampleModal"><b>Edit Profile</b></button>
                                        <div class="modal fade cont" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Edit your Profile</h5>
                                                        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button> */}
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="form-group row">
                                                                <label for="staticName" class="col-sm-2 col-form-label">UserName</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" class="form-control" id="staticName" value={UsrName} onChange={e => setUsrName(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mt-2">
                                                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" class="form-control" id="staticEmail" value={UsrEmail} onChange={e => setUsrEmail(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mt-2">
                                                                <label for="staticEmail" class="col-sm-2 col-form-label">Ph No:</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" class="form-control" id="staticEmail" value={UsrNum} onChange={e => setUsrNum(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            {/* <div class="form-group row mt-2">
                                                                <label for="inputPassword" class="col-sm-2 col-form-label">New Password</label>
                                                                <div class="col-sm-10">
                                                                    <input type="password" class="form-control" id="inputPassword" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mt-2">
                                                                <label for="CinputPassword" class="col-sm-2 col-form-label">Conform Password</label>
                                                                <div class="col-sm-10">
                                                                    <input type="password" class="form-control" id="CinputPassword" />
                                                                </div>
                                                            </div> */}
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary" onClick={UpdateData}>Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                <div className='mt-5 d-flex  justify-content-center'>
                                    <h2>Total Stocks: {StockCnt}</h2>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="row DataS">
                            <div className="tiTle col-12">
                                <div className='row'>
                                    <h3 className="Data col-md-6 col-12">Name </h3>
                                    <h3 className="Data col-md-6 col-12 Overflow overflow-hidden">{Name}</h3>
                                </div>
                                <div className='row'>
                                    <h3 className="Data col-md-6 col-12">UserName</h3>
                                    <h3 className="Data col-md-6 col-12 Overflow">{UsrName}</h3>
                                </div>
                                <div className='row'>
                                    <h3 className="Data col-md-6 col-12">Email </h3>
                                    <h3 className="Data col-md-6 col-12 Overflow ">{UsrEmail}</h3>
                                </div>
                                <div className='row'>
                                    <h3 className="Data col-md-6 col-12">Number </h3>
                                    <h3 className="Data col-md-6 col-12 Overflow">{UsrNum}</h3>
                                </div>
                            </div>
                            {/* <div className="vaLue col-md-6 col-12">
                                <h3 className="Data">{Name}</h3>
                                <h3 className="Data">{UsrName}</h3>
                                <h3 className="Data">{UsrEmail}</h3>
                                <h3 className="Data">{UsrNum}</h3>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Profile