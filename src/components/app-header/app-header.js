import React from "react";
import './app-header.css'
import {Col, Row} from "react-bootstrap";

const AppHeader = () => {
    return(
        <Row className='row-app-header p-2'>
            <Col sm={7} className='col-my-todo'>
                <h1 className='my-todo-list'>My ToDo List</h1>
            </Col>
            <Col sm={5} className='col-more-todo'>
                <h1 className='more-todo-done'>1 more to do, 3 done</h1>
            </Col>
        </Row>
    );
};

export default AppHeader;