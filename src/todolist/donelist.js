//completed task
import React from 'react'

class donelist extends React.Component{
    constructor(props)
    {
        super();
    }
    
    render (){
        console.log(this.props.doneItem) 
        return(
            <>
            <h1>donelist</h1>
            {
            this.props.doneItem.map((item)=>
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
            }
            
            )}
            </>
        )
    }
}

export default donelist;