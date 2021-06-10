import React from 'react';
import ViewMyStock from './ViewMyStock'
const TopViewed = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='viewed justify-content-around col-md-5 col-12'>
                    <h1>Mostly viewed Stocks</h1>
                    <ViewMyStock CName="AMZN" />
                    <ViewMyStock CName="IBM" />
                    <ViewMyStock CName="MSFT" />
                </div>
            </div>
            <div className="row mt-5"></div>
            <div className="row mt-5"></div>
        </div>
    );
}
export default TopViewed;