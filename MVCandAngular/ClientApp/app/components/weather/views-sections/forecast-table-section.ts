import { Component, Input } from "@angular/core";

import { CityForecast } from "../../../models/weather/city-forecast";

import { BaseWeatherComponent } from "../../../shared/bases/weather/base-weather";

@Component({
    selector: 'forecast-table-section',
    templateUrl: './forecast-table-section.html',
    providers: []
})

export class ForecastTableSectionComponent extends BaseWeatherComponent {
    
    @Input() forecast: CityForecast;
}