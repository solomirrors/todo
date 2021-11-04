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
        if (this.state.label != '') {
            this.props.addTodoData(this.state.label);
            this.onClickClearButton();
        };
    }
    ;

    onClickClearButton = () => {
        this.setState({
            label: ''
        });
    }

    render() {
        return(
            <form className='container-management-panel'
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className='add-todo'
                    placeholder='Add a task to the list'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <Row className='add-todo-button'>
                    <Col>
                        <AiOutlineClear onClick={this.onClickClearButton}/>
                    </Col>
                    <Col>
                        <BiBookAdd onClick={this.onSubmit}/>
                    </Col>
                </Row>
            </form>
        );
    };
};