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
    this.handleSearch('')
  }

  //search function
  handleSearch = (e) => {
    if(e){
      e.preventDefault()
    }
    let url = this.props.url
    if(this.state.searchText != ''){
      url = `${url}?search=${this.state.searchText}`
    }
    fetch(url, {
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
  handleTextChange = (text) => {
    this.setState({searchText:text})
  }

  render(){
    return (
      <section className='App'>
        <header>
          <img src={logo} alt="iOffice logo"></img>
          <p className="title">People Directory</p>
        </header>
        <SearchBar
          onSearch={this.handleSearch}
          onChange={this.handleTextChange}/>
        <ResultsList 
          resNum={this.state.resNum}
          res={this.state.res}/>  
      </section>
    );
  }
}


