'use client'
import {CurrentWeatherTypes, WeatherForecastTypes} from "@/app/types/weather";
import {useEffect, useState} from "react";
import {fetchCurrentWeather, fetchWeatherForecasat} from "@/app/utils/api";

export const useWeather = (city: string) => {
    const [weather, setWeather] = useState<CurrentWeatherTypes | null>(null);
    const [forecast, setForecast] = useState<WeatherForecastTypes | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!city) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const [currentData, forecastData] = await Promise.all([
                    fetchCurrentWeather(city),
                    fetchWeatherForecasat(city)
                ])

                setWeather(currentData)
                setForecast(forecastData)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred.')
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [city])
    return {weather, forecast, loading, error}
};