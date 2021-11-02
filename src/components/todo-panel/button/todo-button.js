import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {MdNotificationImportant, RiDeleteBackFill} from "react-icons/all";
import './todo-button.css'


export default class TodoButton extends Component{
    render() {
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
    }

}