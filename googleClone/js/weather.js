const API_KEY = "b0cb44432057bee080d3e3db2ed3a68d";

function onGeoOk() {
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
}

function onGeoError() {
  alert("Weather error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
