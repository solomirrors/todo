import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'Type here to search';

    return (
        <Row className='row-search-panel'>
            <Col md={8} className='col-search-panel p-0 m-0 btn-group'>
                <button type='button' className='button-search-panel btn btn-info'>All</button>
                <button type='button' className='button-search-panel btn btn-info'>Active</button>
                <button type='button' className='button-search-panel btn btn-info'>Done</button>
            </Col>

            <Col md={4} className='col-search-panel p-0 m-0'>
                <input className='input-search-panel' placeholder={searchText}/>
            </Col>
        </Row>
    );
}

export default SearchPanel;

