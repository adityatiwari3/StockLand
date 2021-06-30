import React,{useState} from 'react'
import "../Styles/SearchBar.css";
function Search({ triger }) {
    const [Search, setSearch] = useState("");
    const CallWork = () => {
        triger(Search);
        // e.preventDefault();
    };
    return (
        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                        <div className="searchbar mt-2 mb-4">
                            <input className="search_input" type="text" name="CompanyName" placeholder="Search..." onChange={(e)=>{setSearch(e.target.value)}} />
                            <button type="" className="btn search_icon"><i className="fa fa-search" onClick={CallWork}></i></button>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Search
