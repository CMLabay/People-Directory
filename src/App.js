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
      resNum:0,
      name:[],
      email:[],
      phone:[],
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
      let phone = [];
      let email = [];
      let name = [];
      for(let i = 0; i<data.length;i++){
        phone[i] = data[i].phone;
        email[i] = data[i].email;
        name[i] = data[i].name;
    }
    let resNum = data.length;
    this.setState({phone, name, email, resNum})
    console.log(data)
    })
    .catch(console.log('error'))
  }

  //search and filtering functions
  //need to add api call when the App Compnonent renders
  handleTextChange = () => {
    console.log('text change')
  }
  handleSearch = () => {
    console.log('search')
  }

  render(){
    return (
      <section className='App'>
        <header>
          <img src={logo} alt="iOffice logo"></img>
          <p>People Directory</p>
        </header>
        <SearchBar
          onSearch={this.handleSearch}
          onChange={this.handleTextChange}/>
        <ResultsList 
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email} 
          resNum={this.state.resNum}/>  
      </section>
    );
  }
}


