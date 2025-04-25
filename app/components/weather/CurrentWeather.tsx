import { getWeatherIcon, formatTemperature, formatDate } from '../../utils/helper'
import {CurrentWeatherTypes} from "../../types/weather";

interface CurrentWeatherProps {
    data: CurrentWeatherTypes;
}

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
    const weather = data.weather[0];
    const iconUrl = getWeatherIcon(weather.icon);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={iconUrl} alt={weather.description} className="w-20 h-20" />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
                        <p className="text-gray-600 capitalize">{weather.description}</p>
                        <p className="text-4xl font-bold mt-2">{formatTemperature(data.main.temp)}°C</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-600">Feels Like</p>
                        <p className="font-semibold">{formatTemperature(data.main.feels_like)}°C</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-600">Humidity</p>
                        <p className="font-semibold">{data.main.humidity}%</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-600">Wind Speed</p>
                        <p className="font-semibold">{data.wind.speed} m/s</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-600">Pressure</p>
                        <p className="font-semibold">{data.main.pressure} hPa</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-600">Sunrise</p>
                        <p className="font-semibold">{formatDate(data.sys.sunrise, data.timezone)}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Sunset</p>
                        <p className="font-semibold">{formatDate(data.sys.sunset, data.timezone)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};