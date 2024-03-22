const api = {
    key: "afe8fc9a3a5102ec9548af0aa95b7fff",
    base: "https://api.openweathermap.org/data/2.5/",
    forecastBase: "https://api.openweathermap.org/data/2.5/onecall?",
};

export const fetchWeatherData = async (query) => {
    const response = await fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`);
    const data = await response.json();
    return data;
};

export const fetchForecastData = async (lat, lon) => {
    const response = await fetch(`${api.forecastBase}lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${api.key}`);
    const data = await response.json();
    return data;
};
