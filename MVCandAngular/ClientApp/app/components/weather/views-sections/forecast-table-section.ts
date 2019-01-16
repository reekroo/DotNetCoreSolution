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

    getCollection(obj: CityForecast) {
        
        let result = new Array<Ar>();

        for (var i = 0; i < obj.list.length; i++) {

            if ((i == 0) || (i > 0 && this.getDate(obj.list[i - 1].dt) != this.getDate(obj.list[i].dt))) {

                result.push(new Ar(obj.list[i].dt, []));
            }

            result[result.length - 1].list.push(obj.list[i]);            
        }

        return result;
    }
}

//!!!

import { CityWeather } from "../../../models/weather/city-weather";

class Ar {
    constructor(
        public date?: number,
        public  list?: CityWeather[] 
    ) { }
}