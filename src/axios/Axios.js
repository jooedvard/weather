import axios from 'axios';

class Axios{
    get(api,callback){
        axios({
            url:api,
            method:"GET"
        }).then(response=>{
            callback(response)
        })
    }
}

export default Axios;