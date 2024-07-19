let userInput = document.getElementById("weatherInput");
let weather = document.getElementById("weather");
let weatherLocation = document.getElementById("weatherLocation");
let temperature = document.getElementById("temperature");

async function searchButton() {
  let cityName = userInput.value;
  let apiKey = "055b354669952ef35434839dff99e3f8";

  let weatherFetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  console.log(cityName);
  let jsonData = await weatherFetch.json();
  console.log(jsonData);

  //   weather.innerText = Math.floor(jsonData.main.temp - 273.15);
  //   console.log(Math.floor(jsonData.main.temp - 273.15));

  weatherLocation.innerText = `${jsonData.name}, ${jsonData.sys.country} `;
  temperature.innerText = Math.floor(`${jsonData.main.temp - 273.15}°C`);
}

// 273.15

// getWeatherData();
