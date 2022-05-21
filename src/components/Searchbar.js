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

  fetchCitySearch = ()=>{
      let {city} = this.state;
      let api = "http://api.weatherapi.com/v1/current.json?key=9476f0547d5f4cb7afd84550222105&q="+city+"&aqi=no";
      this.axios.get(api,(city)=>{
          this.setState({location:city.data});
      })
  }


  
  render() { 
    return ( 
      <div className='searchbar'>
        <input type={"search"} id={"city-search"} ref={this.search} placeholder={"Search..."} onChange={(e)=>{this.onSearch(e)}}/>
        <button onClick={()=>{this.props.getCity(this.state.city)}}><HiOutlineSearch className='search-icon'></HiOutlineSearch></button>
      </div>
     );
  }
}
 
export default SearchBar;