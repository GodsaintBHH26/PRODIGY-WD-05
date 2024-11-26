import "./style.css";
import { checkWeather } from "./data/weather";
import { sliderCity } from "./data/defaultCity";
import { weathers } from "./data/weatherTypes";

document.querySelector("#app").innerHTML = `
  <div >
    <div class="weather-board w-full mt-24 translate-x-28 flex flex-col h-128 bg-gradient-to-b from-[#9b9aa1] to-[#f0fdff] justify-center rounded relative justify-items-center">

    <div class="search flex justify-center rounded-2xl items-center bg-gradient-to-t from-[#00bb31] to-[#00bce2] w-64 h-10 mt-4 absolute top-1 left-128">
    <input type="text" id="search-bar" placeholder="City Name" spellcheck="false" class="p-2 pl-5 text-black bg-white rounded-sm rounded-l-2xl">
    <button class="items-center search-btn"><img src="/icons/search.png" class="h-12"></button>
    </div>

    <div class="weather-container w-full flex gap-10"></div>
    </div>

    </div>
  </div>
`;
let weatherContainerHtml = "";

// let data = checkWeather();

async function loadWeather() {
  for (const c of sliderCity) {
    let data = await checkWeather(c);

    const imgPath = data.weather;
    console.log(imgPath)


    weatherContainerHtml += `
  <div class="weather-card justify-items-center flex items-center pt-2 mx-10 bg-white w-60 h-72 rounded-lg text-black shadow-md">
  
    <div class="flex flex-col justify-items-center place-items-center pt-5 flex-wrap">
      <img src="/icons/weather/cloudy-svgrepo-com.svg" class="w-20">
      <div class="flex items-center gap-1 mt-2"><h1 class="temperature">${data.temperature}</h1><img src="public/icons/temperature-c-svgrepo-com.svg" class="h-4 invert saturate-200"></div>
      <h1 class="city mt-5 text-xl font-medium">${data.name}</h1>
  
      <div class="details text-sm ml-2 flex gap-5 mt-10">
      
      <div class="detail-col flex  items-center gap-1">
      <img src="/icons/humidity.png" class="h-6">
      <div class="flex gap-1 flex-col text-lg">
      <p class="humidity">${data.humidity}%</p>
      </div>
      </div>
  
      <div class="detail-col flex  items-center gap-1">
      <img src="/icons/wind.png" class="h-6 saturate-150">
      <div class="flex gap-1 flex-col text-lg">
      <p class="wind">${data.wind} km/h</p>
      </div>
    </div>
    </div>
    
  </div>
  </div>
  `;
    document.querySelector(".weather-container").innerHTML =
      weatherContainerHtml;
  }
}
loadWeather();

// console.log(data.weather);
