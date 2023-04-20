import React from "react";
import axios from "axios";
class Weather extends React.Component{
    constructor(props){
        super()
        this.state={weather:[]}
       
    }
    componentDidMount=()=>{
        const url="https:api.openweathermap.org/data/2.5/weather?q=chennai&appid=986f33bdf061bb9fab80a42b7df0602f"
        axios.get(url).then((res)=>{console.log(res)
        this.setState({weather:res.data})})
       .catch((err)=>console.log(err))
    }
    render(){
        return(
        <>
        
        <input type="text"></input>
        <input type="button" value="search"></input>
        
        
        </>)
        
}
}

export default Weather;
