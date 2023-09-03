function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#description-weather").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let temperature = Math.round(response.data.main.temp);
  let displayedTemperature = document.querySelector("#current-temperature");
  displayedTemperature.innerHTML = `${temperature}`;
  let dateElement = document.querySelector("#current-time");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sheffield&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
