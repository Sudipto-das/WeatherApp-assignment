// function/getWeatherData.ts
import axios from "axios";

export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const response = await axios.get(`/api/weather`, {
    params: { latitude, longitude },
  });
  return response.data;
};
