import React from "react";
import "./facebook.css"

function facebook(){
    return(
        <>
        <div className="card1">
            <center>
            <h1>create project</h1>
            <p>its easy</p>
            </center>
            
            <hr></hr>
             <input type="text" placeholder="first name"></input>
            
            <input type="text" placeholder="last name"></input>
            <br></br>
            <br></br>
            
            <div>
                <input type="text" placeholder="mobiel number"></input>
            </div>
            <br></br>
            <label>data birth</label>
            <br></br>
            <select>
                <option></option>
                <option>jan</option>
                <option>feb</option>
                <option>mar</option>
                <option>april</option>

            </select>
            <select>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <select>
                <option></option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
            </select>
            <br></br>
            <br></br>
            <label>gender</label>
            <br></br>
            <input type="text" placeholder="female"></input>
            <input type="text" placeholder="male"></input>
            <input type="text" placeholder="custom"></input>
    
            
           
            


        </div>
        </>
    )
    
}
export default facebook;