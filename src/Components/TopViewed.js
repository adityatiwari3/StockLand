import React, { useEffect } from 'react';
import "../Styles/TopViewed.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ViewMyStock from './ViewMyStock'
import { useState } from 'react';
const TopViewed = ({ triger }) => {
    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }, [])
    const comp1 = "AMZN";
    const comp2 = "IBM";
    const comp3 = "MFST";
    const comp4 = "GOOGL";
    // const num = 2222;
    const [num, setNum] = useState();
    const fun = (name) => {
        triger(name);
    }
    return (

        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 col-12'>
                <div data-Aos="fade-up" className="card fact_work">
                    <h3 data-Aos="fade-up" className="card-header fact-header_work text-dark text-center">Mostly viewed Stocks</h3>
                    <div className="card-boby">
                        <dl className="row text-center mt-3">
                            <dt data-Aos="fade-up" data-aos-delay="100" className="col-6"><h4>Amazon</h4></dt>
                            <dd data-Aos="fade-up" data-aos-delay="100" className="col-6"><button className="btn btn-primary" onClick={() => fun(comp1)}>check</button></dd>
                            <dt data-Aos="fade-up" data-aos-delay="100" className="col-6"><h4>IBM</h4></dt>
                            <dd data-Aos="fade-up" data-aos-delay="200" className="col-6"><button className="btn btn-primary" onClick={() => fun(comp2)}>check</button></dd>
                            <dt data-Aos="fade-up" data-aos-delay="100" className="col-6"><h4>Microsoft</h4></dt>
                            <dd data-Aos="fade-up" data-aos-delay="200" className="col-6"><button className="btn btn-primary" onClick={() => fun(comp3)}>check</button></dd>
                            <dt data-Aos="fade-up" data-aos-delay="100" className="col-6"><h4>Google</h4></dt>
                            <dd data-Aos="fade-up" data-aos-delay="200" className="col-6"><button className="btn btn-primary" onClick={() => fun(comp4)}>check</button></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        

    );
}
export default TopViewed;