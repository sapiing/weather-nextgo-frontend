'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { SearchBar } from '../components/common/SearchBar';
import { CurrentWeather } from '../components/weather/CurrentWeather';
import { WeatherForecast } from '../components/weather/WeatherForecast';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useWeather } from '../hooks/useWeather';
import { useLocalStorage} from "@/app/hooks/useLocalStorage";

export default function MainPage() {
    const [city, setCity] = useLocalStorage('lastCity', 'London');
    const { weather, forecast, loading, error } = useWeather(city);

    const handleSearch = (searchCity: string) => {
        setCity(searchCity);
    };

    return (
        <>
            <Head>
                <title>Weather App</title>
                <meta name="description" content="Check the weather in your city" />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-blue-900 tracking-wide">
                        Weather Forecast
                    </h1>

                    <div className="mb-10 max-w-xl mx-auto">
                        <SearchBar onSearch={handleSearch} initialValue={city} />
                    </div>

                    {loading && (
                        <div className="flex justify-center my-12">
                            <LoadingSpinner />
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r mb-8 shadow-sm">
                            <p className="font-medium">Error</p>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="space-y-8">
                        {weather && <CurrentWeather data={weather} />}
                        {forecast && <WeatherForecast data={forecast} />}
                    </div>
                </div>
            </main>
        </>
    );
}