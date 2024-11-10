const city = document.querySelector(".location-info");
const date = document.querySelector(".date-info");
const temp = document.querySelector(".temp-info");
const weather = document.querySelector(".weather-info");
const weatherImage = document.querySelector("img");
const input = document.querySelector(".search-bar");
const form = document.querySelector("form");

let searchLocation = "";

input.addEventListener("input", (e) => {
  searchLocation = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});

const getWeather = async () => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchLocation.toLocaleLowerCase()}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cd7649ce63msh2a0f91ab425013cp15287ejsnc08f338eed8c",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setDisplay(result);
  } catch (error) {
    throw new Error(error);
  }
};

const setDisplay = (data) => {
  city.textContent = data.location.name;
  date.textContent = data.location.localtime;
  temp.textContent = data.current.temp_c;
  weather.textContent = data.current.condition.text;
  !data ? "" : (weatherImage.src = data.current.condition.icon);
};

getWeather();
