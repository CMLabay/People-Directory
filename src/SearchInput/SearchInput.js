import React, { Component } from 'react'
import './SearchInput.css'

export default class SearchInput extends Component{
    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text"
                    name="search"
                    className="search-input"
                    onChange={(e) => this.props.onChange(e.target.value)}></input>
                <button 
                    type="submit"
                    onClick={this.props.onSearch}>
                    Search
                </button>
            </form> 
        )     
    }
}

