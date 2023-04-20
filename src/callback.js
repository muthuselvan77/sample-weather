import React from "react";
import Callbackdisplay from "./Callbackdisplay";

class Callback extends React.Component{
    constructor(props){
        super();
        this.state={count:0}
    }
    increment=()=>
    {
       // this.count=this.count+1;//
      // this.state.count=this.state.count+1;//
      this.setState({count:this.state.count+1})
        console.log(this.state.count)
    }
    decrement=()=>
    {
       // this. state.count=this.state.count-1;//
       if(this.state.count>0){     //coditional statement//
       this.setState({count:this.state.count-1})
        console.log(this.state.count)
       }
    }
    reset=()=>
    {
        this.setState({count:0})
    }

    render(){
        return(
            <>
            <div className="container">
            <button  className="btn btn-success"onClick={this.increment}>+</button>
            <Callbackdisplay count={this.state.count}></Callbackdisplay>
            <button className="btn btn-primary"onClick={this.decrement}>-</button>
           <button className="btn btn-danger"onClick={this.reset}>reset</button>
        

            </div>
            </>

            
        )
    }
}

export default Callback;
/*function fn1 (){
    console.log('fuction 1')

}
function fn2(fn){
    fn()
}
fn2(fn1)*/