import { WeatherForecastTypes } from '../../types/weather';
import { getWeatherIcon, formatTemperature, formatDay } from '../../utils/helper';

interface WeatherForecastProps {
    data: WeatherForecastTypes;
}

export const WeatherForecast = ({ data }: WeatherForecastProps) => {
    // Group forecast by day
    const dailyForecast = data.list.reduce((acc: Record<string, any[]>, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {Object.entries(dailyForecast).slice(0, 5).map(([date, items]) => {
                    const day = items[0];
                    const iconUrl = getWeatherIcon(day.weather[0].icon);

                    return (
                        <div key={date} className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="font-semibold">{formatDay(day.dt)}</p>
                            <img src={iconUrl} alt={day.weather[0].description} className="w-12 h-12 mx-auto my-2" />
                            <p className="text-sm capitalize mb-1">{day.weather[0].description}</p>
                            <div className="flex justify-center space-x-2">
                                <span className="font-bold">{formatTemperature(day.main.temp_max)}°</span>
                                <span className="text-gray-500">{formatTemperature(day.main.temp_min)}°</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};