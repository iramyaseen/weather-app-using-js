const api_key = "815d31dfc1204ba5ba995612251306";

async function getWeather(city = "sahiwal") {
  const api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  const response = await fetch(api_url);
  const data = await response.json();

  if (data.error) {
    document.querySelector(".error-message").innerText = data.error.message;
    document.querySelector(".location").style.display = "none";
    document.querySelector(".temperature").style.display = "none";
    document.querySelector(".detail-info").style.display = "none";
    document.querySelector(".detail-in").style.display = "none";
    document.querySelector(".weather-details").style.display = "none";
    document.querySelector(".weather-icon img").style.display = "none";
    return;
  }

  document.querySelector(".location").innerText = data.location.name;
  document.querySelector(".temperature").innerText =
    Math.round(data.current.temp_c) + "°C";
  document.querySelector(".detail-info .value").innerText =
    data.current.humidity + "%";
  document.querySelector(".detail-in .value").innerText =
    data.current.wind_kph + " km/h";
  document.querySelector(".weather-icon img").src = data.current.condition.icon;
}

const searchButton = document.querySelector(".search-container button");
searchButton.addEventListener("click", () => {
  const city = document.querySelector(".search-container input").value;

  document.querySelector(".error-message").innerText = "";
  document.querySelector(".location").style.display = "block";
  document.querySelector(".temperature").style.display = "block";
  document.querySelector(".detail-info").style.display = "block";
  document.querySelector(".detail-in").style.display = "block";
  document.querySelector(".weather-details").style.display = "flex";
  document.querySelector(".weather-icon img").style.display = "block";

  if (city) {
    getWeather(city);
  }
});

getWeather();
