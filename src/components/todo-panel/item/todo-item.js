import React, {Component} from 'react';
import './todo-item.css'
import {Col, Row} from "react-bootstrap";
import {MdNotificationImportant, RiDeleteBackFill} from "react-icons/all";


export default class TodoItem extends Component{
    render() {
        const {
            label, delTodoData,
            onToggleImportant, onToggleDone,
            important, done
        } = this.props;

        let
            classNames = 'todo-item';
        if (done)
            classNames += ' done';
        if (important)
            classNames += ' important'

        return(
            <div>
                <span className={classNames}
                      onClick={onToggleDone}
                >
                    {label}
                </span>
                <Row className='todo-container-button'>
                    <Col>
                        <RiDeleteBackFill onClick={delTodoData}/>
                    </Col>
                    <Col>
                        <MdNotificationImportant onClick={onToggleImportant}/>
                    </Col>
                </Row>
            </div>
        )
    }
}