import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "../Images/profile.png";
import about from "../Images/about.png";
import Carosel from './Carosel';
import CarouselHome from './CarouselHome';
import Footer from "./Footer";
import "../Styles/Home.css";

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])
    return (
        <>
            <header>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" >
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 data-Aos="zoom-in-left" className="display-4 fw-normal d-inline home-stock">Stock</h1>
                        <h1 data-Aos="zoom-in-right" className="display-4 fw-normal d-inline home-land"> Land</h1>
                        <p data-Aos="fade-left" className="lead fw-normal mt-4">We take inspiration from the world's leading stock brockers. In this era technologies are growing rapidly that's why we take a initiative to use technology in stock market.</p>
                        <NavLink data-Aos="fade-right" className="btn btn-outline-secondary mt-2" to="/Login">Let's begin</NavLink>
                    </div>
                    <div data-Aos="zoom-in-right" className="product-device shadow-sm d-none d-lg-block"></div>
                    <div data-Aos="zoom-in-right" className="product-device product-device-2 shadow-sm d-none d-lg-block"></div>
                </div>
            </header>
            <div data-Aos="fade-up" className="text-center mt-5">
                <h1>WHY CHOOSE US?</h1>
            </div>
            <div data-Aos="fade-up" className="mt-5 ">
                <CarouselHome />
            </div>
            <hr data-Aos="fade-up" className="featurette-divider mt-5" />
            <div data-Aos="fade-up" className="text-center mt-5">
                <h1>WHAT YOU GET HERE</h1>
            </div>
            <div data-Aos="fade-up" className="mt-5">
                <Carosel />
            </div>
            <hr data-Aos="fade-up" className="featurette-divider mt-5" />
            <div className="container" style={{ marginTop: -75 }}>
                <div data-Aos="fade-up" className="row text-center mt-5">
                    <h1>WHO WE ARE ?</h1>
                </div>
                <div className="row featurette">
                    <div  className="col-md-5  order-md-2">
                        <img src={about} alt="" data-Aos="zoom-in" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                    </div>
                    <div  className="col-md-7">
                        <h2 data-Aos="zoom-in" data-Aos-delay="100" className="featurette-heading">Let us give a minute.  <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p data-Aos="zoom-in" data-Aos-delay="200" className="lead">Stock Land is idea of some inovative mindset student from National Institute Of Technology Durgapur, India. The main idea behind this to upgrade the methode of marketing specialy in stock market...</p>
                        <NavLink to="/AboutUs" data-Aos="zoom-in-right" data-Aos-delay="300" className="btn btn-lg btn-primary">Know More</NavLink>
                    </div>
                </div>
                <hr data-Aos="fade-up" className="featurette-divider mt-3" />
                <div data-Aos="fade-up" className="row text-center mt-5">
                    <h1>WHO YOU ARE ?</h1>
                </div>
                <div className="row featurette" style={{marginTop: -30}}>
                    <div  className="col-md-5">
                        <img src={profile} alt="" data-Aos="zoom-in" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
                    </div>
                    <div className="col-md-7">
                        <h2 data-Aos="zoom-in" data-Aos-delay="100" className="featurette-heading">it’s time to know you. <span className="text-muted">See for yourself.</span></h2>
                        <p data-Aos="zoom-in" data-Aos-delay="200" className="lead">We are here to done your work easy so let us give a chance to do something. So that you can easily maintain your all work here which only accesseble by you... </p>
                        <NavLink to="/Profile" data-Aos="zoom-in-left" data-Aos-delay="300" className="btn btn-lg btn-primary">Know More</NavLink>
                    </div>
                </div>
                <div className="row mt-5"></div>
            </div>
            <Footer />
        </>
    )
}

export default Home
