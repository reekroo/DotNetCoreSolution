var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { WeatherViewModel } from "../view-models/weather-view-model";
import { WeatherService } from '../../../services/weather/data.weather.service';
var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weather) {
        this.weather = weather;
        this.weatherViewModel = new WeatherViewModel();
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.weather.getWeatherByGeolocation(position.coords.latitude, position.coords.longitude).subscribe(function (data) {
                    _this.weatherViewModel.weather = data;
                });
                _this.weather.getForecastByGeolocation(position.coords.latitude, position.coords.longitude).subscribe(function (data) {
                    _this.weatherViewModel.forecast = data;
                    _this.chart = _this.addaptToChartData(_this.weatherViewModel.forecast.list);
                    _this.forecast = _this.getCollection(data);
                });
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
                _this.getWeather();
                _this.getForecast();
            });
        }
        ;
    };
    WeatherComponent.prototype.getDate = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    };
    WeatherComponent.prototype.getTemp = function (temp) {
        return Number((temp - 273).toFixed(2));
    };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this.weather.getWeather("Minsk", "by").subscribe(function (data) { _this.weatherViewModel.weather = data; });
    };
    WeatherComponent.prototype.getForecast = function () {
        var _this = this;
        this.weather.getForecast("Minsk", "by").subscribe(function (data) {
            _this.weatherViewModel.forecast = data;
            _this.chart = _this.addaptToChartData(_this.weatherViewModel.forecast.list);
            _this.forecast = _this.getCollection(data);
        });
    };
    WeatherComponent.prototype.addaptToChartData = function (array) {
        if (!array) {
            return;
        }
        var labels = [];
        var temperature = [];
        for (var i = 0; i < array.length; i++) {
            labels.push(this.getDate(array[i].dt));
            temperature.push(this.getTemp(array[i].main.temp));
        }
        var result = {
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
        };
        return result;
    };
    WeatherComponent.prototype.getCollection = function (forecast) {
        var customForecast = [];
        var temp = [];
        for (var i = 0; i < forecast.list.length - 1; i++) {
            temp.push(forecast.list[i]);
            if (this.getDate(temp[temp.length - 1].dt) != this.getDate(forecast.list[i + 1].dt)) {
                customForecast.push(temp);
                temp = [];
            }
        }
        temp.push(forecast.list[forecast.list.length - 1]);
        customForecast.push(temp);
        return customForecast;
    };
    WeatherComponent = __decorate([
        Component({
            templateUrl: './weather-controller.html',
            providers: [WeatherService]
        }),
        __metadata("design:paramtypes", [WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
export { WeatherComponent };
//# sourceMappingURL=weather-controller.js.map