import React from 'react';
import TodoListItem from '../item/'
import TodoButton from "../button";
import './todo-list.css';

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item;

        return(
            <li key={id} className='list-group-item'>
                <TodoListItem
                    {... itemProps}
                    onDeleted={() => console.log('Deleted')}/>
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