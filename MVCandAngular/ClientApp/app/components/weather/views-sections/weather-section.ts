import { Component, Input } from "@angular/core";

import { CityWeather } from "../../../models/weather/city-weather";

import { BaseWeatherComponent } from "../../../shared/bases/weather/base-weather";

@Component({
    selector: 'weather-section',
    templateUrl: './weather-section.html',
    providers: []
})

export class WeatherSectionComponent extends BaseWeatherComponent {

    @Input() weather: CityWeather;       
}