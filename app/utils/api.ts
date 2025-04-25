import {CurrentWeatherTypes} from "@/app/types/weather";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCurrentWeather = async (city: string ): Promise<CurrentWeatherTypes> => {
    const response = await fetch(`${API_BASE_URL}/weather?city=${encodeURIComponent(city)}`);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred.');
    }

    return response.json();
}

export const fetchWeatherForecasat = async (city: string): Promise<CurrentWeatherTypes> => {
    const response = await fetch(`${API_BASE_URL}/forecast?city=${encodeURIComponent(city)}`);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred.');
    }

    return response.json();
}