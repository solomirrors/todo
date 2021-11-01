import React from "react";
import './select-panel-button.css'

const SelectPanelButton = ({buttonText}) => {
    return(
        <button type='button' className='button-search-panel btn btn-info'>{buttonText}</button>
    );
}

export default SelectPanelButton;