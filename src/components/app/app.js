import React, {Component} from "react";
import AppHeader from "../app-header";
import FiltersPanel from "../filter-panel";
import TodoPanel from "../todo-panel";
import ManagementPanel from "../management-panel";
import './app.css';


export default class App extends Component{
    uniKey = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Test React App')
        ]
    };

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.uniKey++
        }
    }

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
           const newItem =
               this.createTodoItem(text)
           const addArray =
               [...todoData, newItem];

           return {
               todoData: addArray
           }
        });
    }

    toggleProperty(arr, id, propName) {
        const index =
            arr.findIndex((el) => el.id === id);

        const oldItem =
            arr[index];
        const newItem =
            { ...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };


    render(){
        const {todoData} = this.state;


        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div>
                <AppHeader
                    doneCount = {doneCount}
                    todoCount = {todoCount}
                />
                <ManagementPanel
                    todoData={todoData}
                    addTodoData = {this.addTodoData}
                />
                <FiltersPanel/>
                <TodoPanel
                    todoData={todoData}
                    delTodoData = {this.delTodoData}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />
            </div>
        );
    }
}