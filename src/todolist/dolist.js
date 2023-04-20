//incompeted task
import React from 'react'

class dolist extends React.Component{
    constructor(props)
    {
        super();
    }
    
    render(){
        console.log(this.props.doItem)
        return(
            
            <>
            <h1>dolist</h1>
            {
            this.props.doItem.map((item)=>
            {
                return(
                    <>
                    {
                        item.deleted===false?(
                            <div>
                    <h6>{item.title}</h6>
                    <button onClick={()=>this.props.toggletodo(item.id)}>done</button>
                    <button onClick={()=>this.props.deleted(item.id)}>delete</button>
                    </div>

                        ):
                        <></>
                        }
                    </>
                    

                )
            })}
            
            </>
        )
    }
}

export default dolist;