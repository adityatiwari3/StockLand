import React, { useState } from 'react'
import Chart from './components/Chart'

function Text() {

    const [name, setName] = useState("");
    const [Dates, setDates] = useState([]);
    const [Datas, setDatas] = useState([]);
    const [Close, setClose] = useState([]);
    const [State, setState] = useState("");
    const KeyValues = [];
    const DataValues = [];
    const CloseValues = [];
    //const name = "googl";
    const CallApi = async (name) => {
        console.log("welcome to api call")
        // console.log(Search);
        const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${name}&outputsize=compact&apikey=R6DG5NS8ZUUQXIV7`)
        //console.log(res);
        const data = await res.json();
        console.log(data)
        for (const key in data['Time Series (Daily)']) {
            //console.log(key)
            KeyValues.push(key);
            DataValues.push(data['Time Series (Daily)'][key]['1. open']);
            CloseValues.push(data['Time Series (Daily)'][key]['4. close']);
        }
        setDates(KeyValues);
        setDatas(DataValues);
        setClose(CloseValues)



    }


    //const n1,n2,n3;
    const n1 = "amzn";
    const n2 = "googl";
    const n3 = "ibm";



    const Render = () => {
        if (State == "open") {
            //console.log("ksldjfldsjf;l")
            return (
                <>
                    <h1>{State}</h1>
                    <Chart Dates={Dates} Data={Datas} />

                </>
            )

        }
        else if (State=="close") {
            return (
                <>
                    <h1>{State}</h1>

                    <Chart Dates={Dates} Data={Close} />

                </>
            )
        }
        else
        {
            return(
                <h1>not fing</h1>
            )
        }
    }
    const setData = (e) => {
        e.preventDefault();
        console.log(name);
        CallApi(name);
        // <Render n={name}/>
    }
    const goData = () => {
        <Chart Dates={Dates} Data={Close} />
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="SearchBar mt-5">

                        <input className="inputSearch" type="text" name="" placeholder="Search to view stocks ..." onChange={(e) => { setName(e.target.value) }} />
                        <button type="submit" className="fa fa-search searchBtn" onClick={setData} ></button>

                    </div>
                </div>
                <div className="row  mt-5">
                    <button className="col btn btn-primary m-2" onClick={()=>{setState("open")}}>
                        open
                    </button>
                    <button className="col btn btn-primary m-2" onClick={()=>{setState("close")}}>
                        close
                    </button>
                </div>
                <div className="row">
                    <Render/>
                    {/* <Chart Dates={Dates} Data={Datas} /> */}
                </div>
                <div className='row justify-content-center mt-5'>

                    <div className='viewed justify-content-around col-md-5 col-12'>
                        <h1>Mostly viewed Stocks</h1>
                        <div className="stockView d-flex  justify-content-between">
                            <span className="Company_Name">AMZN</span>
                            <button className="btn btn-primary" onClick={()=>{goData()}}>Check</button>
                        </div>
                        <div className="stockView d-flex  justify-content-between">
                            <span className="Company_Name">GOOGL</span>
                            <button className="btn btn-primary" >Check</button>
                        </div>
                        <div className="stockView d-flex  justify-content-between">
                            <span className="Company_Name">IBM</span>
                            <button className="btn btn-primary" >Check</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5"></div>
                <div className="row mt-5"></div>

            </div>
        </>
    )
}

export default Text
