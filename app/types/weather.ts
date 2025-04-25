export interface CurrentWeatherTypes {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    }
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    }
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface ForecastItem {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    }
    dt_txt: string;
}

export interface WeatherForecastTypes {
    cod: string
    message: number
    cnt: number
    list: ForecastItem[]
    city: {
        id: number
        name: string
        coord: {
            lon: number
            lat: number
        }
        country: string
    }
}