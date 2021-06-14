import React,{useState} from 'react';
import SearchBar from './SearchBar'
import TopViewed from './TopViewed'
import Chart from './Chart'
import '../Styles/Work.css';
import Footer from './Footer';
const Work = () =>{
    const [Dates,setDates] =useState([]);
    const [Data,setData]=useState([]);
    const TrigerEvent = (Search) =>{
        const KeyValues = [];
        const DataValues = [];
        const CallApi = () => {
            console.log(Search);
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Search}&outputsize=compact&apikey=R6DG5NS8ZUUQXIV7`)
                .then(response => {
                    //console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    for (const key in data['Time Series (Daily)']) {
                        //console.log(key)
                        KeyValues.push(key);
                        DataValues.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                    setDates(KeyValues);
                    setData(DataValues);
                });
        }
        CallApi();
    };
    return(
        <>
        <div className='container'>
         <SearchBar triger={TrigerEvent}/>
         <Chart Dates={Dates} Data={Data}/>
         <TopViewed />
         <div className="row mt-5">

         </div>
        </div>
        <Footer/>
        </>
    );
}
export default Work;