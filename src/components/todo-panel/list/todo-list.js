import React from 'react';
import TodoListItem from '../item/'
import './todo-list.css';

const TodoList = ({todoData, delTodoData}) => {

    const elements = todoData.map((item) => {

        const {id, ...itemProps} = item;

        return(
            <li key={id} className='list-group-item'>
                <TodoListItem
                    {... itemProps}
                    delTodoData={() => delTodoData(id)}/>
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