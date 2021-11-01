import React from "react";
import './select-panel-search.css'

const SelectPanelSearch = () => {
    const searchText = 'Type here to search';

    return(
        <input className='input-search-panel' placeholder={searchText}/>
    );
}

export default SelectPanelSearch;