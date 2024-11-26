import { weathers } from "./weatherTypes";
const apikey = "f9f138c80e3f8d5dc5f751eae375a6c2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

export async function checkWeather(cityName){
    const response = await fetch(apiURL + `&q=${cityName}&appid=${apikey}`);
    var data = await response.json();

    // console.log(data);
    
    let cityDetails = {
        name: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        weather: data.weather[0].main,
    }
    return cityDetails;
}
