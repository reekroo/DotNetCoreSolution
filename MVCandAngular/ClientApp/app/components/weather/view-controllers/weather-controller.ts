﻿import { Component, OnInit } from "@angular/core";

import { CityWeather } from "../../../models/weather/city-weather";
import { CityForecast } from "../../../models/weather/city-forecast";
import { WeatherViewModel } from "../view-models/weather-view-model";

import { WeatherService } from '../../../services/weather/data.weather.service';
import { IChart } from "../../../shared/interfaces/chart/chart";

@Component({
    templateUrl: './weather-controller.html',
    providers: [WeatherService]
})

export class WeatherComponent implements OnInit, IChart {

    weatherViewModel: WeatherViewModel = new WeatherViewModel();

    chart: Object;

    ngOnInit() {
        this.getWeather();
        this.getForecast();
    }

    constructor(private weather: WeatherService) { }


    public getTime(unixUtcTime: number): string {

        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    }

    public getDate(unixUtcTime: number): string {

        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    }
    
    public getTemp(temp: number): number {

        return Number((temp - 273).toFixed(2));
    }


    private getWeather() {
        
        this.weather.getWeather("Minsk", "by").subscribe((data: CityWeather) => { this.weatherViewModel.weather = data; });
    }

    private getForecast() {
        this.weather.getForecast("Minsk", "by").subscribe((data: CityForecast) => {

            this.weatherViewModel.forecast = data;
            this.chart = this.addaptToChartData(this.weatherViewModel.forecast.list);
        });
    }
    
    addaptToChartData(array:CityWeather[]): Object {

        if (!array) {

            return;
        }
        
        var labels = [];
        var temperature = [];

        for (var i = 0; i < array.length; i++) {

            labels.push(this.getDate(array[i].dt));
            temperature.push(this.getTemp(array[i].main.temp));
        }

        let result = {
            labels: labels,
            datasets: [
                {
                    label: 'temperature',
                    data: temperature,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }
            ]
        }

        return result;
    }
}