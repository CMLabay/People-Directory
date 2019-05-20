import React, { Component } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ResultsList from './ResultsList/ResultsList'
import logo from './logo_footer.png';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      filter: '&filterType=Name',
      resNum:0,
      res: {
        name:[],   
        email:[],
        phone:[],
        title:[],   
      }
    }
  }

  componentDidMount(){
    //need to do this securly, for now, it works
    fetch(this.props.url, {
      method: 'get',
      headers: new Headers({
        'x-auth-username':'clabay',
        'x-auth-password':'Inajh1#'
      })
    })
    .then(response => response.json())
    .then(data => {
      let res = {
        name:[],  
        email:[],
        phone:[],
        title:[],     
      }
      for(let i = 0; i<data.length;i++){      
        res.phone[i] = data[i].phone;
        res.email[i] = data[i].email;
        res.name[i] = data[i].lastName + ', ' + data[i].firstName;
        res.title[i] = data[i].jobTitle;  
    }
    let resNum = data.length;
    this.setState({res,resNum})
    })
    .catch(console.log('error'))
  }

  //search and filtering functions
  handleTextChange = (e, filterType) => {
    console.log('text ', e)
    let searchString = e
    //begin filtering the results
    function filterResults(searchString,) {
     let testRegex = `/${searchString}/i`;
      let property = filterType;
      //for(let i = 0; i<this.res[property].length;i++){   
     // }
     //console.log('fil ', this.state.res )
     //return testRegex.test(this.state.res[property])  ;
    }
    //let filtered = filterResults(e);
    //let filtered = this.res.filter(filterResults);
    //do not need to make an api call again, just filter the existing set of data
    //this.setState({searchText:"q="+text})
  }
  handleFilterChange = (filterType) => {
    this.setState({filter:"&filterType="+filterType})
}

  render(){
    console.log(this.state.res)
    return (
      <section className='App'>
        <header>
          <img src={logo} alt="iOffice logo"></img>
          <p className="title">People Directory</p>
        </header>
        <SearchBar
          onSearchChange={this.handleTextChange}
          onFilterChange={this.handleFilterChange}/>
        <ResultsList 
          resNum={this.state.resNum}
          res={this.state.res}/>  
      </section>
    );
  }
}


