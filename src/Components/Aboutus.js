import React, { useEffect, useContext, useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faHeadset, faUsers, faCopyright } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css";
import OurTeam from "./OurTeam";
import Feedback from "./Feedback";
import Location from "./Location";
import Footer from "./Footer";
import { users } from "../App";
import "../Styles/Aboutus.css";
function Aboutus() {

    const { state, dispatch } = useContext(users)

    const history = useHistory();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const checking = async () => {
        try {
            // console.log("cheking 1")
            const res = await fetch('/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            // console.log("cheking 2")
            // console.log(res.status)

            // const data = 0;
            const data = await res.json();
            setEmail(data.Email)
            setPhone(data.Phone)
            // console.log(data);
            // console.log("cheking 3")
            if (!res.status === 200) {
                // console.log("cheking 4")
                // history.push("/Login");
                throw new Error(res.error);
            }
            // console.log("cheking 5")
            dispatch({ type: "USER", payload: true })
        } catch (err) {
            // console.log(err);
            dispatch({ type: "USER", payload: false })
            //history.push("/Login");
            // console.log("cheking 6")
        }
    }
    //console.log(data)

    useEffect(() => {
        checking();
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])

    return (
        <>
            <div className="container">
                <div data-aos="fade-up" className="row ">
                    <div className="col-12 ">
                        <ol className="col-12 breadcrumb about_bread">
                            <li data-aos="fade-left" data-Aos-delay="400" className="breadcrumb-item "><NavLink to="/Home">Home</NavLink></li>
                            <li data-aos="fade-left" data-Aos-delay="800" className="breadcrumb-item active">Aboutus</li>
                        </ol>
                        <h3 className="about_tag">About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h2 data-aos="zoom-in-right" data-aos-delay="200" className="about_tag">Our History</h2>
                        <p data-aos="fade-up" data-aos-delay="400">Our idea to bring this to you is started in may 2021,it is inspired by the leading stock brokers of across the world. Stock Land is idea of some inovative mindset student from National Institute Of Technology Durgapur, India. The main idea behind this to upgrade the methode of marketing specialy in stock market. In this era, technologies are growing rapidly that's why we take a initiative to use technology in stock market. </p>
                        <p data-aos="fade-up" data-aos-delay="600">The team of Stock Land are very glad to welcome any new user to our <i>StockVerse</i>. Just keep mind that it's just a stated here and in the future we cover almost all the possible way to fullfil your requirements.</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div data-Aos="fade-up" className="card fact">
                            <h3 data-Aos="fade-up" className="card-header fact-header text-white">Facts At a Glance</h3>
                            <div className="card-body">
                                <dl className="row">
                                    <dt data-Aos="fade-up" data-aos-delay="100" className="col-6">Started</dt>
                                    <dd data-Aos="fade-up" data-aos-delay="100" className="col-6">1 Jun. 2021</dd>
                                    <dt data-Aos="fade-up" data-aos-delay="200" className="col-6">Major Stake Holder</dt>
                                    <dd data-Aos="fade-up" data-aos-delay="200" className="col-6">Aditya and Parth.</dd>
                                    <dt data-Aos="fade-up" data-aos-delay="300" className="col-6">Last Year's Turnover</dt>
                                    <dd data-Aos="fade-up" data-aos-delay="300" className="col-6">$00001</dd>
                                    <dt data-Aos="fade-up" data-aos-delay="400" className="col-6">Employees</dt>
                                    <dd data-Aos="fade-up" data-aos-delay="400" className="col-6">04</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="col-12 pt-4">
                        <div className="card card-body qutes">
                            <blockquote className="blockquote">
                                <p className="mb-15">It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.</p>
                                <footer className="blockquote-footer">Warren Buffett,
                                    <cite title="Source Title"><a href="https://www.berkshirehathaway.com/letters/1989.html" className="text-decoration-none" target="_blank">letter to shareholders of Berkshire Hathaway INC</a>
                                        , Berkshire Hathaway, 1989</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <OurTeam />
                <Location />
                <div className="row text-center pt-3 info-num mt-4">
                    <div className="col-12 col-lg-3 ">
                        <div data-aos="zoom-in" data-Aos-delay="200" id="client" className="m-3 mb-4 info-detail">
                            <h1 className="pt-2"></h1>
                            <FontAwesomeIcon icon={faSmile} className="fa-2x" />
                            <CountUp end={232} delay={1} redraw={true}>
                                {({ countUpRef , start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <h5 ref={countUpRef} className="count-title" />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <p className="count-text pb-3">Happy Users</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div data-aos="zoom-in" data-Aos-delay="300" id="downloads" className="m-3 mb-4 info-detail">
                            <h1 className="pt-2"></h1>
                            <FontAwesomeIcon icon={faUsers} className="fa-2x" />
                            <CountUp end={4} delay={1} duration={3} redraw={true}>
                                {({ countUpRef , start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <h5 ref={countUpRef} className="count-title" />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <p className="count-text pb-3">Hard Workers</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div data-aos="zoom-in" data-Aos-delay="400" id="visited" className="m-3 mb-4 info-detail">
                            <h1 className="pt-2"></h1>
                            <FontAwesomeIcon icon={faHeadset} className="fa-2x" />
                            <CountUp end={1680} delay={1} redraw={true}>
                                {({ countUpRef , start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <h5 ref={countUpRef} className="count-title" />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <p className="count-text pb-3">Hours Of Support</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div data-aos="zoom-in" data-Aos-delay="500" id="contribution" className="m-3 mb-4 info-detail">
                            <h1 className="pt-2"></h1>
                            <FontAwesomeIcon icon={faCopyright} className="fa-2x" />
                            <CountUp end={10300} delay={0}  redraw={true}>
                                {({ countUpRef , start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <h5 ref={countUpRef} className="count-title" />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <p className="count-text pb-3">Companies available</p>
                        </div>
                    </div>
                </div>
                <Feedback email={Email} phone={Phone} />
            </div>
            <Footer />
        </>
    )
}

export default Aboutus
