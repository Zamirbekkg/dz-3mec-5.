
document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperatureInput');
    const toggleButton = document.getElementById('toggleButton');
    const result = document.getElementById('result');

    let isCelsius = true;

    function convertTemperature(temp) {
        if (isCelsius) {
            return (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
        } else {
            return (temp - 32) * 5/9; // Convert Fahrenheit to Celsius
        }
    }

    function updateResult() {
        const inputValue = parseFloat(temperatureInput.value);
        if (isNaN(inputValue)) {
            result.textContent = 'Введите корректное значение температуры.';
            return;
        }

        const convertedTemp = convertTemperature(inputValue);
        const unit = isCelsius ? '°F' : '°C';
        result.textContent = `Результат: ${convertedTemp.toFixed(2)} ${unit}`;
    }

    toggleButton.addEventListener('click', () => {
        isCelsius = !isCelsius;
        toggleButton.textContent = isCelsius ? 'Переключить на °F' : 'Переключить на °C';
        updateResult();
    });

    temperatureInput.addEventListener('input', updateResult);
});




// document.addEventListener('DOMContentLoaded', () => {
//     const cityInput = document.getElementById('cityInput');
//     const getWeatherButton = document.getElementById('getWeatherButton');
//     const weatherResult = document.getElementById('weatherResult');

//     const apiKey = 'YOUR_API_KEY'; // Замените на ваш API ключ OpenWeatherMap

//     getWeatherButton.addEventListener('click', async () => {
//         const city = cityInput.value.trim();
//         if (!city) {
//             weatherResult.textContent = 'Пожалуйста, введите название города.';
//             return;
//         }

//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Измените на 'units=imperial' для Фаренгейта
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Не удалось получить данные о погоде.');

//             const data = await response.json();
//             const tempCelsius = data.main.temp;
//             const windSpeed = data.wind.speed;
//             const description = data.weather[0].description;

//             weatherResult.textContent = `Температура: ${tempCelsius.toFixed(1)} °C, Скорость ветра: ${windSpeed.toFixed(1)} м/с, Погода: ${description}`;
//         } catch (error) {
//             weatherResult.textContent = `Ошибка: ${error.message}`;
//         }
//     });
// });
