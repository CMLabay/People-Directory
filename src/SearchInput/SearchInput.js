import React, { Component } from 'react'

export default class SearchInput extends Component{
    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="search">Search By Name:</label>
                <input></input>
                <button
                    type="submit"
                    onClick={this.props.onSearch}>
                    Search
                    </button>
            </form>
        )     
    }
}