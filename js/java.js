var inputSearch = document.getElementById('inputSearch');
var buttonFind = document.getElementById('buttonFind');
allItems = []


if(inputSearch.value == ''){
  async function getWeather(){
    var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3109e2b8b95e470d8e8171700221310&q=cairo&days=3`)
    var finalResult = await apiResponse.json();
    allItems=finalResult ;
    displayWeather()
    console.log(allItems);
 }
 getWeather();
}

inputSearch.addEventListener('keyup' ,function(){
    async function getWeather(){
      var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3109e2b8b95e470d8e8171700221310&q=${inputSearch.value}&days=3`)
      var finalResult = await apiResponse.json();
      allItems=finalResult ;
      displayWeather()
   }
   getWeather();
  
 
});


function displayWeather(){
   var cartona = ``;
      cartona =`<div class="expectation today">
      <div class="header-today p-2" id="today">
       <div class="date">${allItems.forecast.forecastday[0].date}</div>
      </div>
      <div class="body-today">
        <h6 id="nameCity" class="nameCity my-3 px-4">${allItems.location.name}</h6>
        <p class="size px-3">${allItems.current.temp_c}<span class="spanOs">o</span>C <img class="imgSize" src="https:${allItems.current.condition.icon}"></p>
        <p class="descriptionWeather" class="p-3 hh">${allItems.current.condition.text}</p>
      </div>
   
      <div class="endExpectations">
        <div class="icons d-flex">
          <i class="fa-solid fa-umbrella"></i>
          <p>${allItems.forecast.forecastday[1].day.avghumidity}%</p>
        </div>
        <div class="icons d-flex">
          <i class="fa-solid fa-wind"></i>
          <p>${allItems.current.wind_kph}kph</p>
        </div>
        <div class="icons d-flex">
          <i class="fa-regular fa-compass"></i>
          <p>${allItems.current.wind_dir}</p>
        </div>
      </div>
      
    </div>
   

    <div class="expectation expectation2 ">
      <div class="day2 text-center p-2">${allItems.forecast.forecastday[1].date}</div>
      <div class="bodys">
        <img src="https:${allItems.forecast.forecastday[1].day.condition.icon}">
        <h4 class="px-3">${allItems.forecast.forecastday[1].day.maxtemp_c}<span class="spanOs2">o</span>C </h4>
        <p>${allItems.forecast.forecastday[1].day.mintemp_c}<span class="spanOs2">o</span></p>
        <p class="descriptionWeather" class="p-4">${allItems.forecast.forecastday[1].day.condition.text}</p>
      </div>
    </div>
   
    <div class="expectation expectation3">
      <div class="day3 text-center header-today p-2">${allItems.forecast.forecastday[2].date}</div>
      <div class="bodys">
        <img src="https:${allItems.forecast.forecastday[2].day.condition.icon}">
        <h4 class="px-3">${allItems.forecast.forecastday[2].day.maxtemp_c}<span class="spanOs3">o</span>C</h4>
        <p>${allItems.forecast.forecastday[2].day.mintemp_c}<span class="spanOs2">o</span></p>
        <p class="descriptionWeather" class="p-4">${allItems.forecast.forecastday[2].day.condition.text}</p>
      </div>
    </div>`

   document.getElementById('displayWeather').innerHTML = cartona;


 // _______________________<<test..مهم لل>>_____________________
   console.log(allItems.forecast.forecastday[1].day.condition.icon);
  //_____________________________________________________________
}