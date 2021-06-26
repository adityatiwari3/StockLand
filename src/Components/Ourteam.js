import React, { useEffect } from 'react'
import image from "../Images/Panda-01.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Styles/OurTeam.css";
function OurTeam() {

    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])
    return (
        <>
            <div className="row  text-center">
                <div className="col-12">
                    <h1 data-Aos="zoom-in" id="our-team">
                        Our Team
                    </h1>
                </div>
                <div className="col-sm p-3 text-center">
                    <div data-Aos="zoom-in-right" className="intro">
                        <img src={image} alt="self image" className="self-img img-circle" />
                        <h4 >
                            Aditya Tiwari
                        </h4>
                        <div className="row m-3 pb-3">
                            <div className="col">
                                <a className="btn btn-block btn-facebook sociel-link" href="https://www.facebook.com/" target="_blank">
                                    <span className="fa fa-facebook"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-linkedin sociel-link" href="https://in.linkedin.com/" target="_blank">
                                    <span className="fa fa-linkedin"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-github sociel-link" href="https://github.com/adityatiwari3" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm p-3 text-center">
                    <div data-Aos="zoom-in" className="intro">
                        <img src={image} alt="self image" className="self-img img-circle" />
                        <h4>
                            Parth Vyas
                        </h4>
                        <div className="row m-3 pb-3">
                            <div className="col">
                                <a className="btn btn-block btn-facebook sociel-link" href="https://www.facebook.com/" target="_blank">
                                    <span className="fa fa-facebook"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-linkedin sociel-link" href="https://in.linkedin.com/" target="_blank">
                                    <span className="fa fa-linkedin"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-github sociel-link" href="https://github.com/adityatiwari3" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm p-3 text-center">
                    <div data-Aos="zoom-in-left" className="intro">
                        <img src={image} alt="self image" className="self-img img-circle" />
                        <h4>
                            Gaurav Patel
                        </h4>
                        <div className="row m-3 pb-3">
                            <div className="col">
                                <a className="btn btn-block btn-facebook sociel-link" href="https://www.facebook.com/" target="_blank">
                                    <span className="fa fa-facebook"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-linkedin sociel-link" href="https://in.linkedin.com/" target="_blank">
                                    <span className="fa fa-linkedin"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-block btn-github sociel-link" href="https://github.com/adityatiwari3" target="_blank">
                                    <span className="fa fa-github"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurTeam
