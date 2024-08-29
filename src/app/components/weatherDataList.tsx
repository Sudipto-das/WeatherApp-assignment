type WeatherDataListProps = {
    humidity: number | string;
    windSpeed: number | string;
    windDirection: number | string;
    rainIntensity: number | string;
    rainAccumulation: number | string;
};

const WeatherDataList = ({ humidity, windSpeed, windDirection, rainIntensity, rainAccumulation }: WeatherDataListProps) => {
    const data = [
        { key: 'Humidity', value: humidity === "N/A" ? "N/A" : `${(humidity as number).toFixed(1)}%` },
        { key: 'Wind Speed', value: windSpeed === "N/A" ? "N/A" : `${(windSpeed as number).toFixed(1)} m/s` },
        { key: 'Wind Direction', value: windDirection === "N/A" ? "N/A" : `${(windDirection as number).toFixed(1)}°` },
        { key: 'Rain Intensity', value: rainIntensity === "N/A" ? "N/A" : `${(rainIntensity as number).toFixed(1)} mm/h` },
        { key: 'Rain Accumulation', value: rainAccumulation === "N/A" ? "N/A" : `${(rainAccumulation as number).toFixed(1)} mm` },
    ];

    return (
        <div className="flex flex-col space-y-2 md:space-y-4">
            {data.map((item, index) => (
                <div key={index} className="flex justify-between px-4 py-2 border-b last:border-0 md:mr-3">
                    <h1 className="text-sm md:text-md font-medium">{item.key}</h1>
                    <h1 className="text-sm md:text-md font-medium">{item.value}</h1>
                </div>
            ))}
        </div>
    );
}
export default WeatherDataList;