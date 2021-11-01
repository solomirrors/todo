import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import TodoPanel from "./components/todo-panel";
import SelectPanel from "./components/select-panel";
import './index.css';

const App = () => {
    return(
        <div className='index-group'>
            <AppHeader/>
            <SelectPanel/>
            <TodoPanel/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));