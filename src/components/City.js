import {React, Component} from "react";
import '../css/city.css';
class City extends Component {
    constructor(props) {
        super(props);
   
    }

    render() { 
        return ( 
            <div className="city" onClick={()=>{this.props.getCity(this.props.city)}}>
               {this.props.city}
            </div>
         );
    }
}
 
export default City;