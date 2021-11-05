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
        filterButton: 'All',
        todoData: [
            this.createTodoItem('Building a project'),
            this.createTodoItem('Project structure'),
            this.createTodoItem('Creating elements'),
            this.createTodoItem('Creating components'),
            this.createTodoItem('Using JSX'),
            this.createTodoItem('Using Props'),
            this.createTodoItem('Using arrays'),
            this.createTodoItem('Using key collections'),
            this.createTodoItem('Enabling and using CSS'),
            this.createTodoItem('Using class components'),
            this.createTodoItem('Event handling'),
            this.createTodoItem('Using State (adding, deleting and editing elements)'),
            this.createTodoItem('Updating the state depending on the previous state'),
            this.createTodoItem('Using Data'),
            this.createTodoItem('Working with Forms'),
            this.createTodoItem('Controlled components')
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
                    [...todoData.slice(0, index), ...todoData.slice(index + 1)];
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
            arg.target.value.toLowerCase();
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

    onFilterButtonClick = (values) => {
        const targetValues = values.target.outerText;
        this.setState(({filterButton}) => {
           return {filterButton: targetValues}
        });
    };

    onChangeButtonFil = (stateData) => {
        if (this.state.filterButton === 'All'){
            return stateData.filter((el) => el.label.toLowerCase().search(this.state.filterSearch) === 0)
        }
        if (this.state.filterButton === 'Active'){
            return stateData.filter((el) => el.label.toLowerCase().search(this.state.filterSearch) === 0
                && el.done === false)
        }
        if (this.state.filterButton === 'Done'){
            return stateData.filter((el) => el.label.toLowerCase().search(this.state.filterSearch) === 0
                && el.done === true)
        }
    }

    render(){
        const {todoData, filterButton} = this.state;
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const DisplayData = this.onChangeButtonFil(todoData)

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
                    onFilterButtonClick = {this.onFilterButtonClick}
                    filterButton = {filterButton}
                />
                <TodoPanel
                    todoData={DisplayData}
                    delTodoData = {this.delTodoData}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />
            </div>
        );
    }
}