import React, { Component } from 'react'
import './ResultItem.css'

export default class ResultList extends Component{
    render(){
        return(
            <li className="result-item">
                <p className='result-name'>{this.props.name}</p>
                <p className='result-phone'>{this.props.phone}</p>
                <p className='result-email'>{this.props.email}</p>
            </li>
        )
    }
} 