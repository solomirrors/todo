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
            <Row className='p-0'>
                <Col className='p-3' sm={10} xs={9}>
                    <span className={classNames}
                          onClick={onToggleDone}
                    >
                        {label}
                    </span>
                </Col>
                <Col className='management-panel-button p-0' sm={2} xs={3}>
                    <RiDeleteBackFill className='button-management-panel m-2' onClick={delTodoData}/>
                    <MdNotificationImportant className='button-management-panel m-2' onClick={onToggleImportant}/>
                </Col>
            </Row>
        )
    }
}