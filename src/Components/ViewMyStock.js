import React,{useEffect} from 'react';

const ViewMyStock = ({ CName, User, BPrice, ind,FindData}) => {
   
    const DeleteStock = () => {
        const ans = window.confirm("Are you sure you want to delete?");
        if (ans) {
            fetch(`/${User}/deleteStock/${ind}`,{
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                 })
            }).then((res)=> res.text())
            
        }
        window.location.reload();
    }
    const callData= () => {
        FindData(CName,BPrice);
    }
    return (
        <>
            <div className="stockView row">
                <span className="Company_Name col-md-7 col-6"><h5>{CName}</h5></span>
                <div className="col-md-5  col-6 d-flex justify-content-around">
                    <button className="Checkibtn" onClick={callData}>Check</button>
                    <button class="btn fa fa-trash" aria-hidden="true" onClick={DeleteStock}></button>
                </div>
            </div>
            {/* <div>
                {RenderChart}
            </div> */}
        </>
    );
}
export default ViewMyStock;