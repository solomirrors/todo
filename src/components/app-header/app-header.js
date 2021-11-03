import React, {Component} from "react";
import './app-header.css'
import {Col, Row} from "react-bootstrap";

export default class AppHeader extends Component{
    render(){

        const {todoCount, doneCount} = this.props;

        return(
            <Row className='row-app-header p-2'>
                <Col sm={7} className='col-my-todo'>
                    <h1 className='my-todo-list'>My ToDo List</h1>
                </Col>
                <Col sm={5} className='col-more-todo'>
                    <h1 className='more-todo-done'>{todoCount} more to do, {doneCount} done</h1>
                </Col>
            </Row>
        );
    }
};