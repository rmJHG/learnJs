const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "b0cb44432057bee080d3e3db2ed3a68d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon= position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 fetch(url).then((response) => response.json())
 .then((data) => {
   city.innerText = data.name;
   weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
 });
}

function onGeoError() {
  alert("Weather error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
