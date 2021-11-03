import React, {Component, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {AiOutlineClear, BiBookAdd} from "react-icons/all";
import './management-panel.css'

export default class ManagementPanel extends Component{
    render() {
        const {addTodoData, addValue} = this.props;

        return(
            <div className='container-management-panel'>
                <input className='add-todo' placeholder='Add a task to the list'/>
                <Row className='add-todo-button'>
                    <Col>
                        <AiOutlineClear/>
                    </Col>
                    <Col>
                        <BiBookAdd onClick={() => addTodoData('ы')}/>
                    </Col>
                </Row>
            </div>
        );
    };
};