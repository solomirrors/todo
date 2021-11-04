import React from "react";
import './filter-search.css'

const FilterSearch = () => {
    const searchText = 'Type here to search';

    return(
        <form className='filter-search'>
            <input className='input-search' placeholder={searchText}/>
        </form>
    );
}

export default FilterSearch;