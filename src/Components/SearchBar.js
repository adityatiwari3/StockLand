import React, { useState, createContext } from 'react';
import "../Styles/SearchBar.css";

const name = createContext();
const SearchBar = ({ triger }) => {
    //  const [Search, setSearch] = useState("");

    const CallWork = (event) => {
        triger(event.target.CompanyName.value);
        event.preventDefault();

    };
    return (
        <>
            <div className="SearchBar">
                <form onSubmit={CallWork}>
                    <input className="inputSearch" type="text" name="CompanyName" placeholder="Search to view stocks ..." />
                    <button type="submit" className="fa fa-search searchBtn" ></button>
                </form>
            </div>
        </>
    );
}
export default SearchBar