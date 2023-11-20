document.addEventListener('DOMContentLoaded', function () {
    // Replace with your OpenWeatherMap API key
    const apiKey = 'f111d543aa469d7ee66f167d3be599f2';
    const city = 'Lafayette'; // Replace with the desired city name
    const lat = 30.235175434408387;
    const lon = -92.0046003289265;
    const units = 'imperial'; // Use 'imperial' for Fahrenheit, 'metric' for Celsius
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    // Get the weather container element
    const weatherContainer = document.getElementById('weather-container');

    // Make an HTTP request to the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information from the API response
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon
            const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

            // Update the content of the weather container with FontAwesome icons
            weatherContainer.innerHTML = `
                
                <p> ${temperature.toFixed(2)} &#8457;</p>
                <img src="${weatherIconUrl}" alt="Weather Icon">
                <p> ${description}</p>
            `;
            weatherContainer.style.width = '200px';
            weatherContainer.style.display = 'flex';
            weatherContainer.style.flexDirection = 'column';
            weatherContainer.style.justifyContent = 'center';
            weatherContainer.style.alignItems = 'center';
            
            weatherContainer.style.border = '2px solid #ccc'; // You can adjust the color as needed
            weatherContainer.style.borderRadius = '8px'; // Optional: Add rounded corners
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherContainer.innerHTML = '<p>Error fetching weather data</p>';
        });
});