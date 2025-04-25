'use client'
import React, {useState} from "react";

interface SearchBarProps {
    onSearch: (city: string) => void;
    initialValue: string;
}

export const SearchBar = ({onSearch, initialValue = ''}: SearchBarProps) => {
    const [city, setCity] = useState(initialValue)

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city.trim())
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center w-full max-w-md mx-auto">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter city name..."
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200"
            >
                Search
            </button>
        </div>
    );

}