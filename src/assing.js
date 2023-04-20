import React from "react";
import Assingdisplay from "./Assingdisplay";

class Assing extends React.Component{
    constructor(props){
        super();
        this.state={name:"hello"}
    
     }
    
    welcome=()=>
    {
        this.setState({name:"hello"+"muthu"})
        console.log(this.state.name)
    }
    reset=()=>
    {
        this.setState({name:"no value"})
    }

render(){

    return(<>
    <center>
    <button onClick={this.welcome}>clik here</button>
    <button onClick={this.reset}>reset</button>
    <div>
    <Assingdisplay name={this.state.name}></Assingdisplay>
    </div>
    </center>


    </>)
}

}
export default Assing;