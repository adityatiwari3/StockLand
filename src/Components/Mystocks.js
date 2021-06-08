import React from 'react'
import Add from './addStock'
import Display from './displayStockList'
const MyStocks = () => {
    return (
        <div className="container">
            <div className="row">
                <span className="PageTitle col-6">My Stocks</span>
                <hr></hr>
            </div>

            <div className="row stocksContent">
                <div className=" col-md-4  col-12 addStocks">
                    <Add />
                </div>
                <div className=" col-md-5  col-12 stockList">
                    <Display />
                </div>
            </div>
        </div>


    );
}
export default MyStocks;