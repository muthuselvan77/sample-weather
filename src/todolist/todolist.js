  //main component
import React from 'react'
import Dolist from "./dolist"
import Donelist from "./donelist"
let todoarr=[{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false,
    "deleted":false

  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true,
    "deleted":false
  }]

class todolist extends React.Component{
    constructor(props)
    {
        super();
        this.state={assing:todoarr}
    }
    getDoItem=()=>
    {
        return this.state.assing.filter(
           (todo)=>todo.completed===false) 
        

    }
    getDoneItem=()=>{
      return this.state.assing.filter(
       (todone)=>todone.completed===true) 
    }
    toggletodo=(todoId)=>{
      console.log(todoId)
      const temptodos=[...this.state.assing]
      console.log(temptodos)
      const todo=temptodos.find((todo)=>todo.id===todoId)
      console.log(todo.completed)
      console.log(temptodos.completed)
      todo.completed=!temptodos.completed;
      console.log(todo.completed)
      this.setState({assing:temptodos})

    }
    deleted=(todoId)=>{
      const temptodos=[...this.state.assing]
      const todo=temptodos.find((todo)=>todo.id===todoId)
      todo.deleted=true;
      console.log(todo.deleted)
      this.setState({assing:temptodos})
    }
    
    render() {
        return(
            <>
            
            <h1 className='name'>todolist</h1>
            
            <center>
            <div className='row'>
              <div className='col'>
              <Dolist doItem={this.getDoItem()} toggletodo={this.toggletodo} deleted={this.deleted}></Dolist>
              </div>
              <div className='col'>
                <Donelist doneItem={this.getDoneItem()}toggletodo={this.toggletodo} deleted={this.deleted }></Donelist>

              </div>
            </div>
            </center>
            
            </>
        )
    }
}

export default todolist;