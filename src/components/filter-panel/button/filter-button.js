import React, {Component} from "react";
import './filter-button.css'

export default class FilterButton extends Component{
    onActiveFilterButton = (filtersButtonText, filterButton) => {
        if (filtersButtonText === filterButton){
            return 'filter-button btn btn-info active'
        }
        else
            return 'filter-button btn btn-info'
    }

    render() {
        const {filtersButtonText, onFilterButtonClick, filterButton} = this.props;
        return(
            <button type='button' className={this.onActiveFilterButton(filtersButtonText, filterButton)} onClick={onFilterButtonClick}>{filtersButtonText}</button>
        )
    }
}
