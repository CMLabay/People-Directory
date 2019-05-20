import React, { Component } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import './SearchBar.css'

class SearchBar extends Component{
    render(){
        return(
            <section className="searchBar">
            <SearchInput
                onSearchChange={this.props.onSearchChange}
                onFilterChange={this.props.onFilterChange}/>
            </section>
        );
    }
}

export default SearchBar;