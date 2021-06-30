import React from 'react'
import { Carousel } from '3d-react-carousal';
import img1 from "../Images/3.jpg";
import img2 from "../Images/6.jpg";
import img3 from "../Images/8.jpg";
function Slide2() {

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

export default Slide2
