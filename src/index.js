import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";

import './index.css';
import TodoPanel from "./components/todo-panel/todo-panel";

const App = () => {
    return(
        <div className='index-group'>
            <AppHeader/>
            <SearchPanel/>
            <TodoPanel/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));