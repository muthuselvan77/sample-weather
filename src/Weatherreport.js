import Search from './Search';
import Result from './Result';
import React,{ useState } from 'react';
import axios from 'axios';
import "./weatherproject.css"

function Weatherreport(){
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState([]);

  const changeSearch=(value)=>{
    setSearch(value)
    console.log(value)
 }
  const searchweatherHandler=()=>{
    if(search !==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e017f2524f71916bd4455ed68887c24&units=metric`)
      //axios.get("https:api.openweathermap.org/data/2.5/weather?q=${search}&appid=986f33bdf061bb9fab80a42b7df0602f")//
      .then(
        (response)=>{
          console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error)=>{
       console.log(error);
        }
      )
    }
  }
  return(
    <>
    <div>
    <div className='muthu'>
      {/* <h1>WEATHER API</h1> */}
      </div>
      <div>
      <Search searchData={search} eventHandler={changeSearch} searchweather={searchweatherHandler} />
      <Result WeatherData={weather}/>
      </div>
      </div>
      </>
  );
}

export default Weatherreport;