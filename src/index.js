import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app-header";

import './index.css';
import TodoPanel from "./components/todo-panel/todo-panel";
import SelectPanel from "./components/select-panel/select-panel";

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