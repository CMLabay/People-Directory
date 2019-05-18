import React, { Component } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Filter from '../Filter/Filter'

class SearchBar extends Component{
    render(){
        return(
            <section className="searchBar">
            <SearchInput
                onSearch={this.props.onSearch}
                onChange={this.props.onChange}/>
            <Filter/>
            </section>
        );
    }
}

export default SearchBar;