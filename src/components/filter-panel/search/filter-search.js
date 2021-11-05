import React, {Component} from "react";
import './filter-search.css'

export default class FilterSearch extends Component{
    state = {
        filterLabel: ''
    };

    onInputValue = (e) => {
        this.setState({
           filterLabel: e.target.value
        });
    };

    onFilterSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const searchText = 'Type here to search';
        const {filTodoData} = this.props;

        return(
            <form className='filter-search'
                  onSubmit={this.onFilterSubmit}
                  onChange={filTodoData}
            >
                <input
                    type='text'
                    className='input-search'
                    placeholder={searchText}
                    onChange={this.onInputValue}
                    value={this.state.filterLabel}
                />
            </form>
        );
    }
}