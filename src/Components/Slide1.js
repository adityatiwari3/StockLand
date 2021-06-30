import React from 'react'
import { Carousel } from '3d-react-carousal';
import img1 from "../Images/4.jpg";
import img2 from "../Images/5.jpg";
import img3 from "../Images/7.jpg";

function Slide1() {


    let slides = [
        <img src={img1} alt="1" className="home_carousel"/>,
        <img src={img2} alt="2" className="home_carousel"/>,
        <img src={img3} alt="3" className="home_carousel"/>,]

    return (
        <>
            
            <Carousel slides={slides} autoplay={true} interval={5000} />

        </>
    )
}

export default Slide1
