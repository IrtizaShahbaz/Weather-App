const apiKey = "5ae9d263c580c77b1cd0061ebab1e094";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInp = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  let res = await fetch(url + city + `&appid=${apiKey}`);
  let data = await res.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

  if (data.weather[0].main === "Haze") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  }
  document.querySelector(".error").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInp.value);
});
