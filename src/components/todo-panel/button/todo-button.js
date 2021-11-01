import React from 'react';
import {Col, Row} from "react-bootstrap";
import {MdNotificationImportant, RiDeleteBackFill} from "react-icons/all";
import './todo-button.css'


const TodoButton = () => {
    return(
        <Row className='todo-container-button'>
            <Col>
                <RiDeleteBackFill/>
            </Col>
            <Col>
                <MdNotificationImportant/>
            </Col>
        </Row>
    );
};

export default TodoButton;