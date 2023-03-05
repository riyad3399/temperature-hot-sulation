const API_KEY = `4b85d603a7788a7755b64be70e59d6be`;

const fetchTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    showTemperature(data);
}

const showTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)

    // console.log(data.weather[0].main);
}

// set innerText by id
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-input');
    const city = searchField.value;
    document.getElementById('city-name').innerText = city;
    fetchTemperature(city);
})

fetchTemperature('dhaka');