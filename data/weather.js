const apikey = "f9f138c80e3f8d5dc5f751eae375a6c2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata";

export async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data)
}

