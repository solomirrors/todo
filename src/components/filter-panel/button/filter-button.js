import React from "react";
import './filter-button.css'

const FilterButton = ({filtersButtonText}) => {
    return(
        <button type='button' className='filter-button btn btn-info'>{filtersButtonText}</button>
    );
}

export default FilterButton;