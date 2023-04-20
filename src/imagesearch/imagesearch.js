import React from "react";
import axios from 'axios';

class Imagesearch extends React.Component{
    constructor(props){
        super()
        this.state={image:[],searchText:""}
    }

    /*componentDidMount()
    {
        const url="https://api.unsplash.com/search/photos?client_id=mJpMaf3Ksl6S01jdqcAH9MErH045hKNh6DAzAVfqPsg&page=1&query=cricket"
        axios.get(url).then((sss)=>{console.log(sss)
        this.setState({image:sss.data.results})})
        .catch((err)=>console.log(err))
    }*/
    handleSearch=(event)=>{
        console.log(event.target.value)
        this.setState({searchText:event.target.value})
      }
    getImage=(query)=>{
        const url="https://api.unsplash.com/search/photos?client_id=mJpMaf3Ksl6S01jdqcAH9MErH045hKNh6DAzAVfqPsg&page=1&query="+query
        axios.get(url).then((res)=>{console.log(res)
        this.setState({image:res.data.results})})
       .catch((err)=>console.log(err))
    }
    submitted=(event)=>{
        event.preventDefault();
         this.getImage(this.state.searchText) 
        }
    
    render() {
        return(<>
            <form onSubmit={this.submitted}>
              <input type="text" onChange={this.handleSearch}  ></input>
              <input type="button" value="Search" onClick={this.submitted} className="muthu" ></input>
            </form>
            {this.state.image.map((img)=>
            <>
            <span style={{width: "50%"}}>
                <span>
            <img src={img.urls.thumb}>
            </img>
              <p> {img.alt_description}</p>
              </span>
              {/* <div className="col">
            <img src={img.urls.thumb}>
            </img>
              <h6> {img.alt_description}</h6>
              </div> */}
            </span>
            </>
            )
          
            }
            </>)

       
}
}
    

export default Imagesearch;
