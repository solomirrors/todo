import React from 'react';
import TodoListItem from '../item/todo-list-item'
import './todo-list.css';
import TodoButtonPanel from "../button/todo-button-panel";

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item;

        return(
            <li key={id} className='list-group-item'>
                <TodoListItem {... itemProps}/>
                <TodoButtonPanel/>
            </li>
        );
    });

    return(
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
}

export default TodoList;