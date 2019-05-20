import React, { Component } from 'react'
import './Pages.css'

//display the middle section as resultNum
//pageNum*50+1
export default class Pages extends Component{
    render(){
        let startRes = (this.props.pageNum - 1)* 50 +1;
        let endRes = this.props.pageNum * 50;
        return(
            <nav className="browse-results">
                <a 
                    href="" 
                    className="browse-link"
                    onClick={this.props.onBrowseBackward}>Prev</a>
                <a href="" className="bl-middle">{startRes} to {endRes}</a>
                <a 
                    href="" 
                    className="browse-link"
                    onClick={this.props.onBrowseForward}>Next</a>
            </nav>
        )
    }
}