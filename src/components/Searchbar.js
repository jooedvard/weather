import React, { Component } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import Axios from '../axios/Axios';
import '../css/searchbar.css';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.search = React.createRef();
    this.axios = new Axios();
  }

  state = {  
      city:"",
      location:{}
  }

  onSearch = (e)=>{
      let value = e.target.value;
      this.state.city = value;
  }

  onKey = (e) =>{
    if(e.key =='Enter') {
      this.props.getCity(this.state.city);
      e.target.value = '';
    }
  }

 

  
  render() { 
    return ( 
      <div className='searchbar'>
        <input type={"search"} id={"city-search"} ref={this.search} placeholder={"Search..."} onKeyDown={(e)=>{this.onKey(e)}} onChange={(e)=>{this.onSearch(e)}}/>
        <button onClick={()=>{this.props.getCity(this.state.city)}}><HiOutlineSearch className='search-icon'></HiOutlineSearch></button>
      </div>
     );
  }
}
 
export default SearchBar;