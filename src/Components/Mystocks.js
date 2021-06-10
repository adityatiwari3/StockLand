import React, {createContext} from 'react';
import AddStock from './AddStock'
import Footer from "./Footer";
import DisplayStockList from './DisplayStockList'
import '../Styles/MyStocks.css';
const MyStocks = () => {
     
    // export const CName = createContext();

    const stockdata = {
        companyname: "",
        stockname: "",
    }

    const addfun = (data) => {
        stockdata.companyname = data.companyname;
        stockdata.stockname = data.stockname;
        // console.log(stockdata);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <span className="col-12"><h1 className='PageTitle'>My Stocks</h1></span>
                    <hr></hr>
                </div>
                <div className="row stocksContent d-flex justify-content-around align-items-center">
                    <div className=" col-md-4 col-12   d-flex justify-content-between align-items-center addStocks">
                        <AddStock fun={addfun} />
                    </div>
                    <div className=" col-md-5 col-12 stockList">
                            {/* <CName.Provider value={stockdata.companyname}> */}
                            <DisplayStockList data={stockdata}/>
                            {/* </CName.Provider> */}
                    </div>
                </div>
                <div className="row mt-5">

                </div>
            </div>

            <Footer />
        </>
    );
}
export default MyStocks;
