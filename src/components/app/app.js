import React, {Component} from "react";
import AppHeader from "../app-header";
import FiltersPanel from "../filter-panel";
import TodoPanel from "../todo-panel";
import ManagementPanel from "../management-panel";
import './app.css';


export default class App extends Component{
    uniKey = 100;

    state = {
        filterSearch: '',
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Test React App'),
            this.createTodoItem('Add Filters'),
            this.createTodoItem('Test Filters'),
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

    filTodoData = (arg) => {
        arg.preventDefault();
        const formatArg =
            arg.target.value.toLowerCase().replace(' ', '');
        this.setState(({filterSearch}) =>{
            return{ filterSearch: formatArg }
        });
    };



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
        const {todoData, filterSearch} = this.state;

        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        const filterTodoData =
            todoData.filter((el) => el.label.toLowerCase().replace(' ', '').search(this.state.filterSearch) === 0)

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
                <FiltersPanel
                    filTodoData = {this.filTodoData}
                />
                <TodoPanel
                    todoData={filterTodoData}
                    delTodoData = {this.delTodoData}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />
            </div>
        );
    }
}