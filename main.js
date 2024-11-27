import "./style.css";
import { checkWeather } from "./data/weather";
import { sliderCity } from "./data/defaultCity";
import { weathers } from "./data/weatherTypes";

document.querySelector("#app").innerHTML = `
  <div >
    <div class="weather-board w-full mt-24 translate-x-28 flex flex-col h-128 bg-gradient-to-b from-[#9b9aa1] to-[#f0fdff] justify-center rounded relative justify-items-center">

    <div class="search flex justify-center rounded-2xl items-center bg-gradient-to-t from-[#00bb31] to-[#00bce2] w-64 h-10 mt-4 absolute top-1 left-128">
    <input type="text" id="search-bar" placeholder="City Name" spellcheck="false" class="p-2 pl-5 text-black bg-white rounded-sm rounded-l-2xl z-10">
    <button class="items-center search-btn"><img src="/icons/search.png" class="h-12 search-img"><img src="/icons/close.png" class="h-4 px-4 mr-1 z-20 close-img hidden"></button>
    </div>

    <div class="weather-container w-full flex justify-between  gap-10"></div>
    <div class="search-result hidden"></div>
    </div>

    </div>
  </div>
`;
let weatherContainerHtml = "";
let searchBtn = document.querySelector(".search-btn");
let weatherCOntainer = document.querySelector(".weather-container");
let searchResult = document.querySelector(".search-result");
const searchImg = document.querySelector(".search-img");
const closeImg = document.querySelector(".close-img");

async function loadWeather() {
  for (const c of sliderCity) {
    let data = await checkWeather(c);

    let imaGe = '';

    const imgPath = data.weather;
    
    if(imgPath=='Mist'){
      imaGe = weathers.Mist;
    }else if(imgPath=='Rain'){
      imaGe = weathers.Rain;
    }else if(imgPath=='Thunderstorm'){
      imaGe = weathers.Thunderstorm;
    }else if(imgPath=='Snow'){
      imaGe = weathers.Snow;
    }else if(imgPath=='Smoke'){
      imaGe = weathers.Smoke;
    }else if(imgPath=='Fog'){
      imaGe = weathers.Fog;
    }else if(imgPath=='Haze'){
      imaGe = weathers.Haze;
    }else if(imgPath=='Dust'){
      imaGe = weathers.Dust;
    }else if(imgPath=='Clear' || imgPath=='Sunny'){
      imaGe = weathers.Clear;
    }else if(imgPath=='Clouds'){
      imaGe = weathers.Clouds;
    }else if(imgPath=='Tornado'){
      imaGe = weathers.Tornado;
    }else if(imgPath=='Drizzle'){
      imaGe = weathers.Drizzle;
    }

    weatherContainerHtml += `
  <div class="weather-card justify-items-center flex items-center pt-2 mx-10  bg-white w-60 h-72 rounded-lg hover:scale-110 scroll-smooth  text-black shadow-md duration-100">
  
    <div class="flex flex-col justify-items-center items-center pt-5 p-1">
      <img src=${imaGe} class="w-20">
      <div class="flex items-center gap-1 mt-2"><h1 class="temperature text-lg">${data.temperature}</h1><img src="/icons/temperature-c-svgrepo-com.svg" class="h-4 invert saturate-200"></div>
      <h1 class="city mt-5 text-xl font-medium">${data.name}</h1><h2>${data.weather}</h2>
  
      <div class="details text-sm ml-2 flex gap-5 mt-5">
      
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
    weatherCOntainer.innerHTML =
      weatherContainerHtml;
  }
}
loadWeather();

let searchResultHtml = '';

searchBtn.addEventListener("click", ()=>{
  let searchInp = document.getElementById("search-bar").value;
  weatherCOntainer.classList.toggle("hidden");
  closeImg.classList.toggle("hidden");
  searchImg.classList.toggle("hidden");
  searchResult.classList.toggle("hidden");

  async function searchResults() {
    try{
      let data = await checkWeather(searchInp);

      console.log(data)
  
      if(!data || !data.name){
        throw new Error("City name not found");
      }
  
      let imaGe = '';
  
      const imgPath = data.weather;
      
      if(imgPath=='Mist'){
        imaGe = weathers.Mist;
      }else if(imgPath=='Rain'){
        imaGe = weathers.Rain;
      }else if(imgPath=='Thunderstorm'){
        imaGe = weathers.Thunderstorm;
      }else if(imgPath=='Snow'){
        imaGe = weathers.Snow;
      }else if(imgPath=='Smoke'){
        imaGe = weathers.Smoke;
      }else if(imgPath=='Fog'){
        imaGe = weathers.Fog;
      }else if(imgPath=='Haze'){
        imaGe = weathers.Haze;
      }else if(imgPath=='Dust'){
        imaGe = weathers.Dust;
      }else if(imgPath=='Clear' || imgPath=='Sunny'){
        imaGe = weathers.Clear;
      }else if(imgPath=='Clouds'){
        imaGe = weathers.Clouds;
      }else if(imgPath=='Tornado'){
        imaGe = weathers.Tornado;
      }else if(imgPath=='Drizzle'){
        imaGe = weathers.Drizzle;
      }
  
      console.log(imaGe);
  
      searchResultHtml = `
    <div class="flex flex-col w-128 translate-x-96 rounded-lg justify-items-center bg-gradient-to-t from-[#00bb31] to-[#00bce2] h-80 shadow-md">
    <img src=${imaGe} class="h-28 mt-5 drop-shadow-sm">
    <h1 class="font-semibold text-3xl drop-shadow-sm mt-5">${data.name}</h1>
    <h3 class="font-semibold ">${data.weather}</h3>
  
    <div class="font-bold">
  
    <p>Temperature: ${data.temperature}°C</p>
    <p>Wind: ${data.wind}Km/h</p>
    <p>Humidity: ${data.humidity}%</p>
  
    </div>
    
    </div>
    `
    searchResult.innerHTML = searchResultHtml;
  
    }catch{
      console.error("Error fetching weather data:", error);

      searchResultHtml = `
        <div class="error-message text-center bg-red-100 text-red-500 p-4 rounded shadow-md">
          <p><strong>Error:</strong> ${error.message || "Unable to retrieve data for the specified city. Please try again."}</p>
        </div>
      `;

      searchResult.innerHTML = searchResultHtml;
    }
      
  // searchInp = '';
  }

  searchResults();
  
  
})



// console.log(data.weather);
