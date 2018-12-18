var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { CityWeather } from "../../../models/weather/city-weather";
var WeatherSectionComponent = /** @class */ (function () {
    function WeatherSectionComponent() {
    }
    WeatherSectionComponent.prototype.getTime = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    };
    WeatherSectionComponent.prototype.getDate = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    };
    WeatherSectionComponent.prototype.getDescription = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].description;
    };
    WeatherSectionComponent.prototype.getIcon = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].icon;
    };
    WeatherSectionComponent.prototype.getTemp = function (temp) {
        return Number((temp - 273).toFixed(2));
    };
    __decorate([
        Input(),
        __metadata("design:type", CityWeather)
    ], WeatherSectionComponent.prototype, "weather", void 0);
    WeatherSectionComponent = __decorate([
        Component({
            selector: 'weather-section',
            templateUrl: './weather-section.html',
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], WeatherSectionComponent);
    return WeatherSectionComponent;
}());
export { WeatherSectionComponent };
//# sourceMappingURL=weather-section.js.map