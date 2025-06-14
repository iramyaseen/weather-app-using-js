const api_key = "815d31dfc1204ba5ba995612251306";

// const api_url = `https://api.openweathermap.org/data/2.5/weather?q=noorpur&appid=${api_key}`;

async function getWeather(city = "sahiwal") {
  const api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  const response = await fetch(api_url);
  const data = await response.json();

  if (data.error) {
    document.querySelector(".error-message").innerText = data.error.message;
    document.querySelector(".location").style.display = "none";
    document.querySelector(".temperature").style.display = "none";

    document.querySelector(".detail-info").style.display = "none";
    document.querySelector(".weather-details").style.display = "none";

    document.querySelector(".weather-icon img").style.display = "none";
    return;
  } else {
    document.querySelector(".location").innerText = data.location.name;
    document.querySelector(".temperature").innerText =
      Math.round(data.current.temp_c) + "°C";

    document.querySelector(".detail-info .value").innerText =
      data.current.humidity + "%";
    document.querySelector(".detail-in .value").innerText =
      data.current.wind_kph + " km/h";

    document.querySelector(".weather-icon img").src =
      data.current.condition.icon;
  }
}

const searchButton = document.querySelector(".search-container button");
searchButton.addEventListener("click", () => {
  const city = document.querySelector(".search-container input").value;
  if (city) {
    getWeather(city);
  }
});
getWeather();
