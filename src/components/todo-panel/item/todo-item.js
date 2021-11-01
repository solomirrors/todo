import React from 'react';
import './todo-item.css'

const TodoItem = ({label, important = false}) => {
    const style = {
      color: important ? '#ff2b00': 'white'
    };

    return (
        <span className='todo-list-item'
              style={style}
        >
            {label}
        </span>
    );
}

export default TodoItem;