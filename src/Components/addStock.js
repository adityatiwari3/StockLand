import React, { useState,useEffect } from 'react'
// import { useHistory } from "react-router-dom";
const AddStock = ({ User,onTriger}) => {
    const [stockName, setStockName] = useState('')
    const [stockPrice, setStockPrice] = useState(0)
   
    // const history = useHistory();
    const sendData = (e) => {
        e.preventDefault();

        fetch(`${User}/stocksData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stockName, stockPrice
            })
        }).then(response => response.json())
        onTriger();
        // history.push("/MyStocks")
        
    }
    useEffect(()=> {

    })
    return (
        <div className="Stocks">
            <h2 className="PageSubTitle">Add New Stock</h2>
            <hr></hr>
            <div id="AddStocks">
                <form>
                    <div className="FormGroup d-flex  justify-content-between form-group">
                        <label htmlFor="CompanyName">Stock Name</label>
                        <input className="Input" type="text" id="CompanyName" onChange={(event) => setStockName(event.target.value)} />
                    </div>
                    <div className="FormGroup d-flex justify-content-between form-group">
                        <label htmlFor="BuyPrice">Buy Price</label>
                        <input className="Input" type="text" id="BuyPrice" onChange={event => setStockPrice(event.target.value)} />
                    </div>
                    <button className="btn btn-primary Addbtn" onClick={sendData}>Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddStock;