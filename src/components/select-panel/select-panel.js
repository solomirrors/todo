import React from 'react';
import {Col, Row} from "react-bootstrap";
import "./select-panel.css"

const SelectPanelButton = ({buttonText}) => {
    return(
        <button type='button' className='button-search-panel btn btn-info'>{buttonText}</button>
    );
}

const SelectPanelSearch = () => {
    const searchText = 'Type here to search';

    return(
        <input className='input-search-panel' placeholder={searchText}/>
    );
}

const SelectPanel = () => {
    return(
        <Row className='row-search-panel'>
            <Col md={8} className='col-search-panel p-0 m-0 btn-group'>
                <SelectPanelButton buttonText='All'/>
                <SelectPanelButton buttonText='Active'/>
                <SelectPanelButton buttonText='Done'/>
            </Col>
            <Col md={4} className='col-search-panel p-0 m-0'>
                <SelectPanelSearch/>
            </Col>
        </Row>
    );
}

export default SelectPanel;