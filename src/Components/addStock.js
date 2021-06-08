import React from 'react'
const Add = () => {
    return (
        <div class="Stocks">
            <span className="PageSubTitle">Add New Stock</span>
            <hr></hr>
            <div id="AddStocks">
                    <form>
                        <div className="FormGroup form-group">
                            <label for="CompanyName">Company Name</label>
                            <input className="Input" type="text" id="CompanyName" />
                        </div>
                        <div className="FormGroup form-group">
                            <label for="BuyPrice">Stock Buy Price</label>
                            <input className="Input" type="text" id="BuyPrice" />
                        </div>
                        <button className="Addbtn">Add</button>
                    </form>
            </div>
        </div>
    );
}
export default Add;