import React, { Component } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import './SearchBar.css'

class SearchBar extends Component{
    render(){
        return(
            <section className="searchBar">
            <SearchInput
                onSearch={this.props.onSearch}
                onChange={this.props.onChange}/>
            </section>
        );
    }
}

export default SearchBar;