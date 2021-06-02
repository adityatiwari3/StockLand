import React from 'react'
import image from "../Images/home_img-2.jpg";

  
const Home = () => {
    return (
        <>  
            <div className="home-container"> 
                <img src={image} alt="" className="home-img"/>
                <div className="home-con0">
                    <div className="home-con1">
                        <div className="home-content">
                            <h1 className="name">Hey' Aditya Tiwari</h1>
                            <p className="after-name">welcome to stockland</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam exercitationem minima, numquam sed veniam obcaecati maxime ea modi. Quibusdam doloribus aperiam porro nam rem magnam atque illum! Mollitia, laudantium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
