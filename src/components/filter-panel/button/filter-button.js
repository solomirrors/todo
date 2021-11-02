import React, {Component} from "react";
import './filter-button.css'

export default class FilterButton extends Component{
    render() {
        const {filtersButtonText} = this.props;
        return(
            <button type='button' className='filter-button btn btn-info'>{filtersButtonText}</button>
        )
    }
}
