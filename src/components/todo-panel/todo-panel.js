import React from 'react';
import './todo-panel.css';
import TodoList from "./list/todo-list";
import {Col, Row} from "react-bootstrap";

const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3},
    {label: 'Test React App', important: true, id: 4}

]

const TodoPanel = () => {
    return(
        <Row className='todo-panel'>
            <Col sm={12}>
                <TodoList todos = {todoData}/>
            </Col>
        </Row>
    );
}

export default TodoPanel;