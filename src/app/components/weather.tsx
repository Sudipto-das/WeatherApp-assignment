'use client'
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/redux/store";
import { fetchWeatherData } from "../function/getWeatherData";
import Image from "next/image";
import WeatherDataList from "./weatherDataList";

const WeatherDetails = () => {
    const selectedLocality = useSelector((state: RootState) => state.Locality.selectedLocality);

    const { isLoading, error, data } = useQuery({
        queryKey: ['weatherData', selectedLocality?.latitude, selectedLocality?.longitude],
        queryFn: () => fetchWeatherData(selectedLocality?.latitude!, selectedLocality?.longitude!),
        enabled: !!selectedLocality?.latitude && !!selectedLocality?.longitude,
    });

    if (!data && !isLoading) return <div>No weather data available.</div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading weather data.</div>;

    // Fallbacks for null values
    const temperature = data.locality_weather_data?.temperature ?? "N/A";
    const humidity = data.locality_weather_data?.humidity ?? "N/A";
    const wind_speed = data.locality_weather_data?.wind_speed ?? "N/A";
    const wind_direction = data.locality_weather_data?.wind_direction ?? "N/A";
    const rain_intensity = data.locality_weather_data?.rain_intensity ?? "N/A";
    const rain_accumulation = data.locality_weather_data?.rain_accumulation ?? "N/A";

    return (
        <div className="flex w-full md:w-[70%] mx-auto border-2 rounded-md flex-col">
            <div className="w-full border-b px-2 py-2 flex justify-between bg-slate-200">
                <h1 className=" uppercase text-sm md:text-lg font-semibold">Current Weather</h1>
                <div className="flex items-center gap-2">
                    <Image src={"/location.png"} alt={"location"} width={24} height={24}/>
                    <h1 className="uppercase text-sm md:text-lg font-semibold">{selectedLocality?.localityName }</h1>   
                </div>
            </div>
            <div className="w-full flex flex-col py-6 md:py-10 md:flex-row items-center">
                <div className="w-full md:w-[50%] flex items-center justify-center gap-4 md:gap-5">
                    <div className="px-20 py-10 rounded-md bg-slate-200 shadow-md">
                        <Image src={"/cloudy.png"} alt={"weather image"} width={72} height={72} className="w-16 h-16 md:w-20 md:h-20" />
                        <h1 className="text-4xl md:text-6xl font-semibold">{temperature === "N/A" ? "N/A" : `${temperature.toFixed(1)}°C`}</h1>
                    </div>
                </div>
                <div className="w-full md:w-[50%] mt-6 md:mt-0">
                    <WeatherDataList
                        humidity={humidity}
                        windSpeed={wind_speed}
                        windDirection={wind_direction}
                        rainIntensity={rain_intensity}
                        rainAccumulation={rain_accumulation}
                    />
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;


