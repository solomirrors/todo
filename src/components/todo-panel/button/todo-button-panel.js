import React from 'react';
import './todo-button-panel.css'
import {Col, Row} from "react-bootstrap";
import {MdNotificationImportant, RiDeleteBackFill} from "react-icons/all";


const TodoButtonPanel = () => {
    return(
        <div className='todo-button-panel'>
            <Row>
                <Col>
                    <RiDeleteBackFill/>
                </Col>
                <Col>
                    <MdNotificationImportant/>
                </Col>
            </Row>
        </div>
    );
};

export default TodoButtonPanel;