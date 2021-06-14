import React, {useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AddStock from './AddStock'
import {user} from "../App";
import Footer from "./Footer";
import DisplayStockList from './DisplayStockList'
import '../Styles/MyStocks.css';
const MyStocks = () => {
     
    // export const CName = createContext();

    const {state,dispatch} = useContext(user)


    const history = useHistory();

    const checking = async () =>{
        try{
            // console.log("cheking 1")
            const res = await fetch('/About',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            
            // console.log("cheking 2")
            // console.log(res.status)

            // const data = 0;
            const data = await res.json();
            // console.log(data);
            // console.log("cheking 3")
            if(!res.status === 200)
            {
                // console.log("cheking 4")
                // history.push("/Login");
                throw new Error(res.error);
            }
            // console.log("cheking 5")
            dispatch({type:"USER",payload:true})
        }catch(err) {
            // console.log(err);
            dispatch({type:"USER",payload:false})
            history.push("/Login");
            // console.log("cheking 6")
        }
    }

    useEffect(() => {
        checking();
    }, [])


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
