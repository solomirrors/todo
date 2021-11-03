import React, {Component} from 'react';
import './todo-panel.css';
import TodoList from "./list/todo-list";
import {Col, Row} from "react-bootstrap";

export default class TodoPanel extends Component {
    render() {
        return(
            <Row className='todo-panel'>
                <Col sm={12}>
                    <TodoList
                        todoData = { this.props.todoData }
                        delTodoData= { this.props.delTodoData }
                        onToggleImportant= { this.props.onToggleImportant}
                        onToggleDone = {this.props.onToggleDone}
                    />
                </Col>
            </Row>
        );
    };
};
