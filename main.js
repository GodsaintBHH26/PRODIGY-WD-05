import './style.css'


document.querySelector('#app').innerHTML = `
  <div >
    <div class="card w-full mt-24 translate-x-28 flex flex-col h-128 bg-gradient-to-b from-[#9b9aa1] to-[#f0fdff] justify-center rounded relative place-items-center">

    <div class="search flex justify-center rounded-2xl items-center bg-gradient-to-t from-[#00bb31] to-[#00bce2] w-64 h-10 mt-4 absolute top-1 left-128">
    <input type="text" id="search-bar" placeholder="City Name" spellcheck="false" class="p-2 pl-5 text-black bg-white rounded-sm rounded-l-2xl">
    <button class="items-center"><img src="/icons/search.png" class="h-12"></button>
    </div>

    <div class="weather justify-items-center items-center bg-white w-60 h-60 rounded-lg text-black">
    <img src="/icons/weather/rainy-svgrepo-com.svg" class="w-24 m-4">
    <div class="flex items-center"><h1>22</h1><img src="public/icons/temperature-c-svgrepo-com.svg" class="h-3 invert"></div>
    <h1>New York</h1>

    <div class="details text-sm flex gap-8 ">
    <div class="detail-col flex  items-center gap-1">
    <img src="/icons/humidity.png" class="h-5">
    <div class="flex gap-1 flex-col">
    <p>50%</p>
    <p>Humidity</p>
    </div>
    </div>

    <div class="detail-col flex  items-center gap-1">
    <img src="/icons/wind.png" class="h-5 saturate-150">
    <div class="flex gap-1 flex-col">
    <p>15 km/h</p>
    <p>Wind</p>
    </div>
    </div>

    </div>

    </div>

    </div>
  </div>
`

