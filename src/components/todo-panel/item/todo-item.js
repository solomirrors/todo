import React, {Component} from 'react';
import './todo-item.css'
import {Col, Row} from "react-bootstrap";
import {MdNotificationImportant, RiDeleteBackFill} from "react-icons/all";

export default class TodoItem extends Component{

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
           return {
               done: !done,
           }
        });
    }

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
              important: !important
            };
        });
    }

    render() {
        const {label, delTodoData} = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-item';

        if (done) {
            classNames += ' done';
        }

        if (important){
            classNames += ' important'
        }

        return (
            <div>
                <span className={classNames}
                  onClick={ this.onLabelClick }>
                    {label}
                </span>
                <Row className='todo-container-button'>
                    <Col>
                        <RiDeleteBackFill onClick={delTodoData}/>
                    </Col>
                    <Col>
                        <MdNotificationImportant onClick={ this.onMarkImportant}/>
                    </Col>
                </Row>
            </div>

        );
    }
}