const key = "e067f9a97c46accd4094b8924a7584d6"

const btn = document.querySelector(".btnControl").addEventListener("click", () => {

    const cityName = document.querySelector(".txtControl").value;

    fetcApi(cityName);
})

const fetcApi = (cityName) => {
    const fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`)
        .then((response => response.json()))
        .then((data) => { displayData(data) })
}

const displayData = (data) => {
    const city = document.querySelector(".city").innerText = `${data.name}, ${data.sys.country}`;
    const temprature = document.querySelector(".temprature").innerText = `${Math.round(data.main.temp)}°C`;
    const description = document.querySelector(".description").innerText = `${data.weather[0].description}`
}

