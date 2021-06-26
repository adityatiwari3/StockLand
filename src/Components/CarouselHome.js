import React from 'react'
import { Carousel } from '3d-react-carousal';
import img1 from "../Images/search_carousel.png";
import img2 from "../Images/graph_carousel_work.png";
import img3 from "../Images/graphOption_carousel_work.png";
import img4 from "../Images/introMystocks_carousel.png";
import img5 from "../Images/addMystocks_carousel.png";
import img6 from "../Images/storeMystocks_carousel.png";
import img7 from "../Images/checkMystocks_carousel.png";
import img8 from "../Images/graphMystocks_carousel.png";
import img9 from "../Images/graphfunctionMystocks_carousel.png";

function CarouselHome() {


    let slides = [
        <img src={img1} alt="1" className="home_carousel"/>,
        <img src={img2} alt="2" className="home_carousel"/>,
        <img src={img3} alt="3" className="home_carousel"/>,
        <img src={img4} alt="4" className="home_carousel"/>,
        <img src={img5} alt="5" className="home_carousel"/>,
        <img src={img6} alt="6" className="home_carousel"/>,
        <img src={img7} alt="7" className="home_carousel"/>,
        <img src={img8} alt="8" className="home_carousel"/>,
        <img src={img9} alt="9" className="home_carousel"/>];
    return (
        <>
            
            <Carousel slides={slides} autoplay={true} interval={5000} />

        </>
    )
}

export default CarouselHome
