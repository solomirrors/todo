import React, {Component} from 'react';
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
        if (this.state.label !== '') {
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
            <Row className='container-management-panel px-3 pe-3 pt-3'>
                <Col className='p-0' sm={10} xs={9}>
                        <form
                            className='form-management-panel'
                            onSubmit={this.onSubmit}
                        >
                            <input
                                type='text'
                                className='input-management-panel p-2'
                                placeholder='Add a task to the list'
                                onChange={this.onLabelChange}
                                value={this.state.label}
                            />
                        </form>
                </Col>
                <Col className='management-panel-button p-0' sm={2} xs={3}>
                    <AiOutlineClear className={'button-management-panel m-2'} onClick={this.onClickClearButton}/>
                    <BiBookAdd className='button-management-panel m-2' onClick={this.onSubmit}/>
                </Col>
            </Row>

        );
    };
};