import React from "react";
import AppHeader from "../app-header";
import FiltersPanel from "../filter-panel";
import TodoPanel from "../todo-panel";
import './app.css';
import ManagementPanel from "../management-panel";

const App = () => {
    return(
        <div>
            <AppHeader/>
            <ManagementPanel/>
            <FiltersPanel/>
            <TodoPanel/>
        </div>
    );
}

export default App;