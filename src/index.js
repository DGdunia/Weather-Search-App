
    
      let date = new Date();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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
      }
      let celsius = document.querySelector("#celsius");
      celsius.addEventListener("click", toCelsius);
      function toCelsius(event) {
        celsius.innerHTML = "16";
      }
      let fahrenheit = document.querySelector("#fahrenheit");
      fahrenheit.addEventListener("click", toFahrenheit);
      function toFahrenheit(event) {
        fahrenheit.innerHTML = "64";
      }
      let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "metric";
  let apiKey = "a428a87920120d37f7d5ad10a19c7a5a";
  let apiLink = `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unit=${unit}`;
  axios.get(apiLink).then(showTemp);
}
function showTemp(event) {
 let city= document.querySelector("h2")
 city.innerHTML= position.coords.timezone

}
   