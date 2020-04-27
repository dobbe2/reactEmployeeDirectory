
import React from "react";

function SearchBar(props) {
    return (
    <div style={{margin:"20px"}}>
        <input 
        onChange={props.handleInputChange}
        value={props.search}
        type="text" 
        name="search" 
        placeholder="Search Employee Here"
        id="search" 
        />
        <button onClick={props.handleFormSubmit}>
        Search
        </button>
    </div>
    )
}

export default SearchBar;