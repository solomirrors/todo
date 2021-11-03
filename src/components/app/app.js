import React, {Component} from "react";
import AppHeader from "../app-header";
import FiltersPanel from "../filter-panel";
import TodoPanel from "../todo-panel";
import './app.css';
import ManagementPanel from "../management-panel";

export default class App extends Component{
    uniKey = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
            {label: 'Test React App', important: true, id: 4}
        ]
    };

    delTodoData = (id) => {
        this.setState(({todoData}) => {
                const index = todoData.findIndex((el) => el.id === id);
                const delArray =
                    [... todoData.slice(0, index), ... todoData.slice(index + 1)];

                return {
                    todoData: delArray
                };
            }
        );
    };

    addTodoData = (text) => {
        this.setState(({todoData}) =>{
           const newItem = {
               label: text,
               important: false,
               id: this.uniKey++
           }
           const addArray =
               [...todoData, newItem];

           return {
               todoData: addArray
           }
        });
    }

    render(){
        return(
            <div>
                <AppHeader/>
                <ManagementPanel
                    todoData={this.state.todoData}
                    addTodoData = {this.addTodoData}
                />
                <FiltersPanel/>
                <TodoPanel
                    todoData={this.state.todoData}
                    delTodoData = {this.delTodoData}
                />
            </div>
        );
    }
}