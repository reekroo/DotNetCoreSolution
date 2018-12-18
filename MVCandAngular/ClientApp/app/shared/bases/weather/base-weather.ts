import { Weather } from "../../../models/weather/city-weather";

class BaseWeatherComponent {

    public getTime(unixUtcTime: number): string {

        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    }

    public getDate(unixUtcTime: number): string {

        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    }

    public getDescription(array: Weather[]): string {

        if (array.length < 1) {
            return '';
        }

        return array[0].description;
    }

    public getIcon(array: Weather[]): string {

        if (array.length < 1) {
            return '';
        }

        return array[0].icon;
    }

    public getTemp(temp: number): number {

        return Number((temp - 273).toFixed(2));
    }
}

export { BaseWeatherComponent };