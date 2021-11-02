import React, {Component} from 'react';
import './todo-panel.css';
import TodoList from "./list/todo-list";
import {Col, Row} from "react-bootstrap";

export default class TodoPanel extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
            {label: 'Test React App', important: true, id: 4}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
                const index = todoData.findIndex((el) => el.id === id);
                const newArray =
                    [todoData.slice(0, index), todoData.slice(index + 1)];

                return {
                    todoData: newArray
                };
            }
        );
    };

    render() {
        return(
            <Row className='todo-panel'>
                <Col sm={12}>
                    <TodoList todos = {this.state.todoData}
                              onDeleted={ this.deleteItem }/>
                </Col>
            </Row>
        );
    };
};
