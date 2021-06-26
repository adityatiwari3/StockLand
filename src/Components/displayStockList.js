import React, { useState, useEffect } from 'react'
import ViewMyStock from './ViewMyStock'

const DisplayStockList = ({ User,Data,TrigerEvent}) => {
    // const [user, setUser] = useState(User);
    // useEffect(()=> {
    //     console.log('DisplayStockList is rendered')
    // });
    // const [usrstdata, setUsrStData] = useState([]);
    // console.log(usrstdata);
    // useEffect(() => {
    //     const Search = async () => {
    //         setUser(User);
    //         const res = await fetch(`${user}/stocksList`);
    //         const data = await res.json();
    //         setUsrStData(data);
    //     }
    //     if(user) {
    //         Search();
    //     }    
    // }, [user]);
    // const [data,setData] =useState(Data);
    useEffect(() =>{
        
    })
    const FindData =(CName,BPrice) =>{
      
       
        TrigerEvent(CName,BPrice);
    }
    const CompanyList = Data.map((CompanyData,index)=>{
        return(
            <div>
                <ViewMyStock CName={CompanyData.stockName} BPrice={CompanyData.stockPrice} User={User}  ind={index} FindData={FindData}/>
            </div>
        );
    });

    return (
        <div className="Stocks">
            <span><h2 className="PageSubTitle">Your Listed Stocks</h2></span>
            <hr></hr>
            <div id="AddStocksList">
                <div className="ListHeaders d-flex justify-content-around">
                    <div className=' d-flex  justify-content-between'><u><h4 className='PageSubSubTitle'>Stock Name</h4></u></div>
                    <div className=' d-flex  justify-content-between'><u><h4 className='PageSubSubTitle'>Current Status</h4></u></div>
                </div>
                <div className="solScroll">
                    {CompanyList}
                </div>
            </div>
        </div>
    );
}
export default DisplayStockList;