import React from 'react';
import {Col, Row} from "react-bootstrap";
import FilterButton from "./button";
import FilterSearch from "./search";
import './filter-panel.css'


const FiltersPanel = () => {
    return(
        <Row className='filter-container-panel'>
            <Col md={8} className='filter-content-panel p-0 m-0 btn-group'>
                <FilterButton filtersButtonText='All'/>
                <FilterButton filtersButtonText='Active'/>
                <FilterButton filtersButtonText='Done'/>
            </Col>
            <Col md={4} className='filter-content-panel p-0 m-0'>
                <FilterSearch/>
            </Col>
        </Row>
    );
}

export default FiltersPanel;