import React, { Component } from 'react'

export default class Filter extends Component{
    render(){
        return(
            <div className="filter-options">
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
            </div>
        )     
    }
}