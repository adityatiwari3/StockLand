import React from 'react'
const AddStock = ({fun}) => {
    
    const data ={
        companyname: "",
        stockname:"",
    }

    const ColectData = (event) => {
        data.companyname=event.target.CompanyName.value;
        data.stockname=event.target.StockName.value;
        fun(data);
        event.preventDefault();
    }

    return (
        <div class="Stocks">
            <span ><h2 className="PageSubTitle">Add New Stock</h2></span>
            <hr></hr>
            <div id="AddStocks">
                <form onSubmit={ColectData}>
                    <div className="FormGroup d-flex  justify-content-between form-group">
                        <label for="CompanyName">Company Name</label>
                        <input className="Input" type="text" name="CompanyName" />
                    </div>
                    <div className="FormGroup d-flex justify-content-between form-group">
                        <label for="BuyPrice">Stock Name</label>
                        <input className="Input" type="text" name="StockName" />
                    </div>
                    <div className="row">
                    </div>
                    <button type="submit" className="btn btn-primary Addbtn" >Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddStock;