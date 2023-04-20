import React from "react";
import "./weatherproject.css";


export default function Result({WeatherData}){
    return(
        <div>
 

            <div>
                { 
                   WeatherData.length !== 0
                      ?
                    <>
            
                        <h1 className="report3">{WeatherData.name}</h1>
                        <div className="card">
                            <div className="report4">Feels like:{WeatherData.main.feels_like}</div>
                            <div className="report4">Max Temp:{WeatherData.main.temp_max}deg</div>
                            <div className="report4">Min Temp:{WeatherData.main.temp_min}deg</div>
                            <div className="report4">humidity:{WeatherData.main.humidity}</div>
                            <div className="report4">pressure:{WeatherData.main.pressure}</div>
                            
                            
                            
                            
                             
                        <div>
                        <div>
                                    <img src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} alt="" />
                                </div>
                          <div><h5>{WeatherData.weather[0].main}</h5></div>
                        </div>
                        </div>    
                    </>
                    :
                    <>
                    <h3 className="report5">Please enter the city name</h3>
                    </>
                }
            </div>
                      
                      
        </div>
            
        
        
    )
}