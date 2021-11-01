import React from "react";
import AppHeader from "../app-header";
import FiltersPanel from "../filter-panel";
import TodoPanel from "../todo-panel";
import './app.css';

const App = () => {
    return(
        <div>
            <AppHeader/>
            <FiltersPanel/>
            <TodoPanel/>
        </div>
    );
}

export default App;