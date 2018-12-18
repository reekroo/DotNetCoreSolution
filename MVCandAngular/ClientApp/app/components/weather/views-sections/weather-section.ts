import { Component, Input } from "@angular/core";

import { Weather, CityWeather } from "../../../models/weather/city-weather";

@Component({
    selector: 'weather-section',
    templateUrl: './weather-section.html',
    providers: []
})

export class WeatherSectionComponent {

    @Input() weather: CityWeather;

    constructor() { }

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