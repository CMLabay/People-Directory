import React, { Component } from 'react'
import './SearchInput.css'

export default class SearchInput extends Component{
    render(){
        return(
            <form>
                <label htmlFor="search">Search:</label>
                {/* create drop down */}
                <input 
                    className="filter-input"
                    onChange={(e) => this.props.onSearchChange(e.target.value, this.props.filter)}></input>
                <label htmlFor="filter-by">Filter By:</label>
                <select 
                    id="filter-by"
                    name="filter-by"
                    onChange={(e) => this.props.onFilterChange(e.target.value)}>
                    <option value="Name">Name</option>
                    <option value="Position">Position</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                </select>
            </form> 
        )     
    }
}

