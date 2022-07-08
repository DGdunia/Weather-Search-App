
function lastUdated(timestamp){
  let date = new Date(timestamp);
  let time = date.getHours();
if (time < 10) {
  time = `0${time}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[date.getDay()];
let cityInput= "London"
return `${currentDay} ${time}:${minutes}`
}
let temp= null;
let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("click", searchingCity);


function searchingCity(event) {
  event.preventDefault();
  cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
  cityTemp(cityInput.value);
}

function cityTemp(city) {
  let unit = "metric";
  let apiKey = "a428a87920120d37f7d5ad10a19c7a5a";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  let apiLink = `${apiUrl}q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiLink).then(showTemp);
}

function showTemp(response) {
  temp = Math.round(response.data.main.temp);
  console.log("temp");
  let displayTemp= document.querySelector("#display-temp");
  displayTemp.innerHTML= temp;
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${windSpeed} mph`;
  let getHumidity = Math.round(response.data.main.humidity);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${getHumidity}%`;
  let skyDescription =document.querySelector("#sky-description")
  skyDescription.innerHTML= response.data.weather[0].description
  let lastUpdate = document.querySelector("#today-date");
  timeStampUpdated= lastUdated(response.data.dt *1000)
  lastUpdate.innerHTML = `last Updated: ${timeStampUpdated}`;
  let weatherIcon = document.querySelector("#topicon");
  weatherIcon.setAttribute("src", `http://openweathermap.prg/img/wn/${response.data.weather[0].icon}@2x.png`)
}

let fahrenheit = document.querySelector("#fahrenheit");
    fahrenheit.addEventListener("click", toFahrenheit);
    function toFahrenheit(event) {
      event.preventDefault();
      celsius.classList.remove("active")
      fahrenheit.classList.add("active")
      let fahrenheitTemp = (temp * 9)/5+32;
      let displayfahrenheitTemp= document.querySelector("#display-temp")
     displayfahrenheitTemp.innerHTML = Math.round(fahrenheitTemp);
    }

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", toCelsius);
function toCelsius(event) {
  event.preventDefault();
  celsius.classList.add("active")
      fahrenheit.classList.remove("active")
  let celsiusTemp= document.querySelector("#display-temp")
  celsiusTemp.innerHTML = temp ;
    }

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", navigator.geolocation.getCurrentPosition(getPosition));
function getPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let unit = "metric";
let apiKey = "a428a87920120d37f7d5ad10a19c7a5a";
let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
axios.get(apiLink).then(positionTemp);
}
function positionTemp(response) {
  let displayTemp = document.querySelector("#display-temp");
  displayTemp.innerHTML =  Math.round(response.data.main.temp);
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${windSpeed} mph`;
  let getHumidity = Math.round(response.data.main.humidity);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${getHumidity}%`;
let city = document.querySelector("#city");
city.innerHTML= response.data.name;
 let lastUpdate = document.querySelector("#today-date");
  timeStampUpdated= lastUdated(response.data.dt *1000)
  lastUpdate.innerHTML = `last Updated: ${timeStampUpdated}`;
let skyDescription =document.querySelector("#sky-description")
  skyDescription.innerHTML= response.data.weather[0].description
  let weatherIcon = document.querySelector("#topicon");
  weatherIcon.setAttribute("src", `http://openweathermap.prg/img/wn/${response.data.weather[0].icon}@2x.png`);
}