import React, {useContext,useState} from 'react';
import Chart from "./Chart";
// import {CName} from "./MyStocks";
const ViewMyStock= (props)=>{
    // const name = useContext(CName);

    // const [Dates,setDates] =useState([]);
    // const [Data,setData]=useState([]);

    
    // const setChart = () =>{
    //     const KeyValues = [];
    //     const DataValues = [];
    //     const CallApi = () => {
    //         //console.log(Search);
    //         fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${props.CName}&outputsize=compact&apikey=R6DG5NS8ZUUQXIV7`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             for (const key in data['Time Series (Daily)']) {
    //                 KeyValues.push(key);
    //                 DataValues.push(data['Time Series (Daily)'][key]['1. open']);
    //             }
    //             setDates(KeyValues);
    //             setData(DataValues);
    //         });
    //     }
    //     CallApi();
    //      console.log(Data)
    //      console.log(Dates)
        
    // };
    
    // const showChart= () =>{
    //     console.log(Data)
    //     console.log(Dates)
    //     setChart();
    //     <Chart Dates={Dates} Data={Data}/>
    // }

    return(
        <div className="stockView d-flex  justify-content-between">
            <span className="Company_Name">{props.CName}</span>
            <button className="btn btn-primary" >Check</button>
        </div>
    );
}
export default ViewMyStock;