import React from 'react'
import image from "../Images/Panda-01.png";
function Ourteam() {
    return (
        <>
            <div className="row  text-center">
                <div className="col-12">
                    <h1 id="our-team">
                        Our Team
                            </h1>
                </div>
                <div className="col-sm p-3 text-center">
                    <div className="intro">
                        <img src={image} alt="self image" className="self-img img-circle" />
                        <h4 >
                            Aditya Tiwari
                            </h4>
                        <div className="row m-3 pb-3">
                            <div className="col">
                                <a class="btn btn-block btn-facebook " href="https://www.facebook.com/" target="_blank">
                                    <span class="fa fa-facebook"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a class="btn btn-block btn-linkedin " href="https://in.linkedin.com/" target="_blank">
                                    <span class="fa fa-linkedin"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a class="btn btn-block btn-github " href="https://github.com/adityatiwari3" target="_blank">
                                    <span class="fa fa-github"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm p-3">
                    <div className="intro">
                        <img src={image} alt="self image" className="self-img img-circle" />
                        <h4>
                            Parth Vyas
                            </h4>
                        <div className="row m-3 pb-3">
                            <div className="col">
                                <a class="btn btn-block btn-facebook " href="https://www.facebook.com/" target="_blank">
                                    <span class="fa fa-facebook"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a class="btn btn-block btn-linkedin " href="https://in.linkedin.com/" target="_blank">
                                    <span class="fa fa-linkedin"></span>
                                </a>
                            </div>
                            <div className="col">
                                <a class="btn btn-block btn-github " href="https://github.com/adityatiwari3" target="_blank">
                                    <span class="fa fa-github"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ourteam
