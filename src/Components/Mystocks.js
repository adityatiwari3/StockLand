import React, { useState, useEffect, useContext } from 'react'
import AddStock from './AddStock'
import Footer from "./Footer";
import { users } from "../App";
import {useHistory} from "react-router-dom";
import NewChart from "./NewChart";
import DisplayStockList from './DisplayStockList'
import '../Styles/MyStocks.css';

const MyStocks = ({ User }) => {

    
    const history =useHistory();
    const { state, dispatch } = useContext(users)
    const [usrema,setUsrema] = useState();
    const [usrstdata, setUsrStData] = useState([]);
    const checking = async (e) => {
        try {
            const res = await fetch('/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setUsrema(data.Email);
            setUsrStData(data.MyStocks);
            if (!res.status === 200) {
                throw new Error(res.error);
            }
            dispatch({ type: "USER", payload: true })
            // main code goes here of authentication for massage

        } catch (err) {
            dispatch({ type: "USER", payload: false })
            history.push("/Login");
        }
    }
    useEffect(() => {
        checking();
    }, [])
    const [Display,setDisplay] =useState('none');
    const [user, setUser] = useState(usrema);
    
    const onTriger = async () => {
        //console.log("ontriger event in my stock is called")
        console.log("ontriger event in my stock is called")
        setUser(usrema);
        const res = await fetch(`${usrema}/stocksList`);
        const data = await res.json();
        console.log(data);
        setUsrStData(data);
        window.location.reload()
        //console.log(data);
    }
    const [DatesO, setDatesO] = useState([]);
    const [DataO, setDataO] = useState([]);
    const [DataC,setDataC]=useState([]);
    const [DataH,setDataH]=useState([]);
    const [DataL,setDataL]=useState([]);
    const [buyPrice,setBuyPrice] =useState([]);

    const TrigerEvent = (Search,BPrice) => {
        const KeyValuesO = [];
        const DataValuesO = [];
        const DataValuesC=[];
        const DataValuesH=[];
        const DataValuesL=[];
        const BuyPrice =[];
        const CallApi = () => {
            console.log(Search);
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Search}&outputsize=compact&apikey=QQLX1CAPFH8SSV4I`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    for (const key in data['Time Series (Daily)']) {
                        console.log(key);
                        KeyValuesO.push(key);
                        DataValuesO.push(data['Time Series (Daily)'][key]['1. open']);
                        DataValuesH.push(data['Time Series (Daily)'][key]['2. high']);
                        DataValuesL.push(data['Time Series (Daily)'][key]['3. low']);
                        DataValuesC.push(data['Time Series (Daily)'][key]['4. close']);
                        BuyPrice.push(BPrice);
                    }
                    setDatesO(KeyValuesO);
                    setDataO(DataValuesO);
                    setDataC(DataValuesC);
                    setDataH(DataValuesH);
                    setDataL(DataValuesL);
                    setBuyPrice(BuyPrice);
                });
        }
        setDisplay('block');
        CallApi();
    };   
    const Change = () => {
        if(Display=='none')
            setDisplay('block');
        else
            setDisplay('none');
    }
    // useEffect(()=>{
    //     console.log("i am here to rerender the page");
    // },[usrstdata])
    // useEffect(() => {
    //     const Search = async () => {
    //         setUser(usrema);
    //         const res = await fetch(`${usrema}/stocksList`);
    //         const data = await res.json();
    //         setUsrStData(data);
    //         console.log(data);
    //     }   
    //     //Search();
    // }, [usrstdata]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="PageTitle">My Stocks</h1>
                        <hr />
                    </div>
                </div>
                <div className="row stocksContent d-flex justify-content-around align-items-center">
                    <div className=" col-lg-4  col-12   d-flex justify-content-between align-items-center addStocks">
                        <AddStock User={usrema} onTriger={onTriger} />
                    </div>
                    <div className=" col-lg-5 col-12 stockList">
                        <DisplayStockList User={usrema} Data={usrstdata} TrigerEvent={TrigerEvent} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <div className='offset-lg-1 col-lg-10 col-12' onDoubleClick={Change} style={{display:`${Display}`}}>
                        <NewChart Dates={DatesO} DataO={DataO} DataC={DataC} DataH={DataH} DataL={DataL} SPrice={buyPrice} />
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default MyStocks;