import React, { Component } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ResultsList from './ResultsList/ResultsList'
import logo from './logo_footer.png'
import Pages from './Pages/Pages'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      filter: '&filterType=Name',
      resNum:0,
      pageNum:1,
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
    let startAt = (this.state.pageNum - 1) *50
    if(this.state.searchText != ''){
      url = `${url}&startAt=${startAt}&search=${this.state.searchText}`
    } else {
      url = `${url}&startAt=${startAt}`
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
  handleBrowseForward = (e) => {
    e.preventDefault();
    let newPage = this.state.pageNum + 1;
    this.setState({pageNum:newPage})
    this.handleSearch('')
    console.log('pg ', this.state.pageNum)
  }
  handleBrowseBackward = (e) => {
    e.preventDefault();
    if(this.state.pageNum > 1){
      let newPage = this.state.pageNum - 1;
      this.setState({pageNum:newPage})
      this.handleSearch('')
      console.log('pg ', this.state.pageNum)
    }
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
        <Pages className='browse'
          onBrowseForward = {this.handleBrowseForward}
          onBrowseBackward = {this.handleBrowseBackward}
          pageNum = {this.state.pageNum}
          resNum = {this.state.resNum}/>
        <ResultsList 
          resNum={this.state.resNum}
          res={this.state.res}/>  
      </section>
    );
  }
}


