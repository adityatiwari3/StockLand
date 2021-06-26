import React, {useEffect} from 'react'
import map_img from "../Images/map.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Styles/Location.css";
function Location() {
    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])
    return (
        <>
            <div className="row pt-3">
                <div className="col-12">
                    <h3 data-Aos="zoom-in-right" id="location">Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1 p-3">
                    <h3 data-Aos="zoom-in-right" data-Aos-delay="300" id="our-add">Our Address</h3>
                    <address data-Aos="zoom-in">
                        21/31, new saket nagar <br />
                                DurgaKund Varanasi, Uttar Pradesh<br />
                                    INDIA<br />
                        <i className="fa fa-phone"></i>: +542 1234 5678<br />
                        <i className="fa fa-fax"></i>: +542 8765 4321<br />
                        <i className="fa fa-envelope"></i>:
                            <a href="mailto:aaditytiwari3@gmail.com">aaditytiwari3@gmail.com</a>
                    </address>
                    <div data-Aos="zoom-in"  className="btn-group contact_med" role="group">
                        <a data-Aos="zoom-in-right" role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a data-Aos="zoom-in" role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a data-Aos="zoom-in-left" role="button" className="btn btn-success" href="mailto:aaditytiwari3@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h3 data-Aos="zoom-in-right" data-Aos-delay="300" id="map" className="pt-2 pb-2">Our Location</h3>
                    <div data-Aos="zoom-in" className="map-img">
                        <a href="https://maps.app.goo.gl/4nP3xamoiCAJ5mT76" target="_blank">
                            <img src={map_img} alt="Click to get location" className="map_img" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Location
