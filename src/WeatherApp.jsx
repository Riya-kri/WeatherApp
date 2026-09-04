import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';


export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Goa",
        feelsLike : 28,
        temp : 29,
        tempMax : 29,
        tempMin : 28,
        humidity : 49,
        weather : "clear sky"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
            < SearchBox updateInfo = {updateInfo} />
            < InfoBox info={weatherInfo} />
        </div>
    )
}