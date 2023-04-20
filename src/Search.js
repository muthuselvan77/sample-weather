import React,{useRef} from "react";
import "./weatherproject.css"

export default function Search(props){
    const SearchInput=useRef();
    return(
        <div className="gill">
            <input type="search" value={props.searchData} onChange={()=>props.eventHandler(SearchInput.current.value)} ref={SearchInput} className="selva"/>
            <br/>
            <br/>
            <button className="report2" onClick={props.searchweather}><b>Search</b></button> 
        </div>
    )
}