import React, { Component } from 'react'
import ResultItem from '../ResultItem/ResultItem'

export default class ResultsList extends Component{
    render(){
        //must pass in returned data from API
        const {name, phone, email, resNum } = this.props;
        let resultsList = [];
        for(let i = 0; i<resNum;i++){
            resultsList[i] = <ResultItem 
                                key={i}
                                name={name[i]}
                                phone={phone[i]}
                                email={email[i]} />
        }
        return(
            <ul className="results-list">
            {resultsList}
            </ul>    
        )
    }
}