import React, {Component, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {AiOutlineClear, BiBookAdd} from "react-icons/all";
import './management-panel.css'

export default class ManagementPanel extends Component{
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoData(this.state.label);
    }

    render() {
        const {addTodoData} = this.props;
        return(
            <form className='container-management-panel'
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className='add-todo'
                    placeholder='Add a task to the list'
                    onChange={this.onLabelChange}
                />
                <Row className='add-todo-button'>
                    <Col>
                        <AiOutlineClear/>
                    </Col>
                    <Col>
                        <BiBookAdd/>
                    </Col>
                </Row>
            </form>
        );
    };
};