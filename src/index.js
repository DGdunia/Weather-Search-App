let date = new Date();
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
let currentDate = date.getDate();
let time = date.getHours();
if (time < 10) {
  time = `0${time}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let timeNmin = time + ":" + minutes;
let todaysDate = document.querySelector("#today-date");
todaysDate.innerHTML = currentDate + " " + currentDay + ", " + timeNmin;

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
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
  let temp = Math.round(response.data.main.temp);
  console.log("temp");
  let celsius = document.querySelector("#celsius");
  celsius.innerHTML = `${temp} °C `;
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind ${windSpeed} mph`;
  let getHumidity = Math.round(response.data.main.humidity);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity ${getHumidity}%`;
}

navigator.geolocation.getCurrentPosition(getPosition);
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("submit", getPosition);
function getPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let unit = "metric";
let apiKey = "a428a87920120d37f7d5ad10a19c7a5a";
let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
axios.get(apiLink).then(positionTemp);
}
function positionTemp(response) {
  let temp = Math.round(response.data.main.temp);
  console.log("temp")
  let h1 = document.querySelector("h1");
  h1.innerHTML = ` It's <Strong> ${temp}°C </strong>  in your current location!`;
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind ${windSpeed} mph`;
  let getHumidity = Math.round(response.data.main.humidity);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity ${getHumidity}%`;
}