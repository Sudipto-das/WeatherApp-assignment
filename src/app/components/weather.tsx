'use client'

import { useSelector } from "react-redux";
import { fetchWeatherData } from "../function/getWeatherData";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/redux/store";

interface WeatherDetailsProps {
    latitude?: number,
    longitude?: number
}

const WeatherDetails: React.FC<WeatherDetailsProps> = () => {
    const selectedLocality = useSelector((state: RootState) => state.Locality.selectedLocality);
console.log(selectedLocality)
    const { isLoading, error, data } = useQuery({
        queryKey: ['weatherData', selectedLocality?.latitude, selectedLocality?.longitude],
        queryFn: () => fetchWeatherData(selectedLocality?.latitude!, selectedLocality?.longitude!),
        enabled: !!selectedLocality?.latitude && !!selectedLocality?.longitude, // Only run the query if both latitude and longitude are provided
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading weather data.</div>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </main>
    );
}

export default WeatherDetails;
