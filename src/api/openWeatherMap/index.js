const API_KEY = "19963199229fffdba78866ec31185980";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
