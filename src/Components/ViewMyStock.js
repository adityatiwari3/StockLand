import React from 'react';
const View= (props)=>{
    return(
        <div className="stockView">
            <span className="Company_Name">{props.CName}</span>
            <button className="Checkibtn">Check</button>
        </div>
    );
}
export default View;