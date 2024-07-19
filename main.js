document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = 'c8ef0e8b2f1eed41d0f8e9c011b772d1'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('weather-result').classList.remove('hidden');
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
