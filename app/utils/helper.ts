export const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const formatTemperature = (temp: number) => {
    return Math.round(temp);
};

export const formatDate = (timestamp: number, timezone: number) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString([], { weekday: 'short' });
};