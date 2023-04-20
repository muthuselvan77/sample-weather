import React from 'react';
import Todolist from "./todolist/todolist"
import Counter from "./Counter"
import Imagesearch from "./imagesearch/imagesearch"
import Weather from './weather';
import Weatherapi from './New folder/weatherapi';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weatherreport from './Weatherreport';
import Form from './form';
import Facebook from './facebook';

function App(){
  return( 
    <> 
    <Router>
      <div>
        <ul>
           {/* <li> <Link to="/Counter">Counter</Link></li>
          <li> <Link to="/todolist">todolist</Link></li>
          <li><Link to="/imagesearch">imagesearch</Link></li>
          <li><Link to="/weather">weather</Link></li>
          <li><Link to="/Weatherapi">weatherapi</Link></li>*/
          <li><Link to="/Weatherreport">Weather Report</Link></li>
          // <li><Link to="/form">form</Link></li>//
          /* <li><Link to="/facebook">facebook</Link></li> */}
        </ul>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Routes>
           <Route path="/Counter" element={<Counter/>}>
            
          </Route>
          <Route path="/todolist" element={<Todolist/>}>
          </Route>
          <Route path="/imagesearch" element={<Imagesearch/>}>
          </Route>
          <Route path="/weather" element={<Weather/>}>

          </Route>
          <Route path="/Weatherapi"element={<Weatherapi/>}></Route>  
            <Route path="/Weatherreport" element={<Weatherreport/>}></Route> 

           <Route path="/Form" element={<Form/>}></Route>  
           <Route path="/facebook" element={<Facebook/>}></Route> 
           

          
          
        </Routes>
      </div>
    </Router>
      


    

    </>
  )
}
export default App;