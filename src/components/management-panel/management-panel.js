import React from 'react';
import {Col, Row} from "react-bootstrap";
import {AiOutlineClear, BiBookAdd} from "react-icons/all";
import './management-panel.css'

const ManagementPanel = () => {
    return(
        <row className='container-management-panel'>
            <input className='add-todo' placeholder='Add a task to the list'/>
            <Row className='add-todo-button'>
                <Col>
                    <AiOutlineClear/>
                </Col>
                <Col>
                    <BiBookAdd/>
                </Col>
            </Row>
        </row>
    )
}

export default ManagementPanel;