const apiKey = "cc4574a7c8759b33717e3113aff19754";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiURL + city +   `&appid=${apiKey}` );
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


     if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy-day.png";
     }
     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
     }
     else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
     }

    


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


checkWeather();