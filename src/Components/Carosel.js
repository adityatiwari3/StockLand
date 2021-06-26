import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/home_img-2.jpg";

function Carosel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" fade="true" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="car-title-search">Start searching your stocks here</h1>
                            <p className="mt-3 car-note-search">This is our work section here you can see details of your favrate stocks <br /> by serching it manualy</p>
                            <p><NavLink className="btn btn-lg btn-primary mt-2 text-light" to="/Work">Search your stock</NavLink></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="car-title-add">Add your stocks here</h1>
                            <p className="mt-3 car-note-add">It is known that if you are searching for stocks then you should have some stocks in your mind so you are in right place come here and add your stock in your stock list</p>
                            <p><NavLink className="btn btn-lg btn-primary mt-2 text-light" to="/MyStock">Add your stock</NavLink></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="car-title-check">Keep track your stocks here</h1>
                            <p className="car-note-check mt-3" >You Searched your stock and added your stock in your stock list then now over the time you want to check your stock update so yor are in right place come here and <br /> check all the update of your added stock in one click</p>
                            <p><NavLink className="btn btn-lg btn-primary mt-2 text-light" to="/MyStock" >Track your stocks</NavLink></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carosel
