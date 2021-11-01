import React from "react";
import './filter-search.css'

const FilterSearch = () => {
    const searchText = 'Type here to search';

    return(
        <input className='filters-search' placeholder={searchText}/>
    );
}

export default FilterSearch;