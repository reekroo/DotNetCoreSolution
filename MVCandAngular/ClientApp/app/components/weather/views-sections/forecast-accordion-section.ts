import { Component, Input, Output } from "@angular/core";

import { CityForecast } from "../../../models/weather/city-forecast";

import { BaseWeatherComponent } from "../../../shared/bases/weather/base-weather";
import { CityWeather } from "../../../models/weather/city-weather";

@Component({
    selector: 'forecast-accordion-section',
    templateUrl: './forecast-accordion-section.html',
    providers: []
})

export class ForecastAccordionSectionComponent extends BaseWeatherComponent {
    
    @Input() forecast: CityForecast;
    
    public getCollection(forecast: CityForecast): { [id: string]: CityWeather[]; } {

        let customForecast: { [id: string]: CityWeather[]; } = {};

        for (var i = 0; i < forecast.list.length - 1; i++) {

            if (i == 0 || this.getDate(forecast.list[i].dt) != this.getDate(forecast.list[i + 1].dt)) {

                customForecast[this.getDate(forecast.list[i].dt)] = new Array<CityWeather>();
            }
        }

        //for (var i = 0; i < forecast.list.length; i++) {

        //    for (const key in customForecast) {

        //        if (key == this.getDate(forecast.list[i].dt)) {

        //            customForecast[key].push(forecast.list[i]);
        //        }
        //    }
        //}

        console.log(customForecast);

        return customForecast;
    }
}
