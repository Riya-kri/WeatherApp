import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "9e26545b5440035bf7106985c18e403e";

    
    let getWeather = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let jsonResponse = await response.json();
            console.log(jsonResponse);

            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMax : jsonResponse.main.temp.max,
                tempMin : jsonResponse.main.temp.min,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeather();
            updateInfo(newInfo);
            setCity("");
        }catch(err){
            setError(true);
        }
    };
    
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required
                onChange={handleChange}/>
                <br></br><br></br>

                <Button 
                    variant="contained"
                    type = "submit">
                    Search
                </Button>
                <p style={{ color: "red" }}>No Such Place Exists!</p>
            </form>
        </div>
    )
}