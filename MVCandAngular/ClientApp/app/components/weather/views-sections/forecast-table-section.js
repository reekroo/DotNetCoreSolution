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
import { CityForecast } from "../../../models/weather/city-forecast";
var ForecastTableSectionComponent = /** @class */ (function () {
    function ForecastTableSectionComponent() {
    }
    ForecastTableSectionComponent.prototype.getTime = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleTimeString());
    };
    ForecastTableSectionComponent.prototype.getDate = function (unixUtcTime) {
        return (new Date(unixUtcTime * 1000).toLocaleDateString());
    };
    ForecastTableSectionComponent.prototype.getDescription = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].description;
    };
    ForecastTableSectionComponent.prototype.getIcon = function (array) {
        if (array.length < 1) {
            return '';
        }
        return array[0].icon;
    };
    ForecastTableSectionComponent.prototype.getTemp = function (temp) {
        return Number((temp - 273).toFixed(2));
    };
    __decorate([
        Input(),
        __metadata("design:type", CityForecast)
    ], ForecastTableSectionComponent.prototype, "forecast", void 0);
    ForecastTableSectionComponent = __decorate([
        Component({
            selector: 'forecast-table-section',
            templateUrl: './forecast-table-section.html',
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ForecastTableSectionComponent);
    return ForecastTableSectionComponent;
}());
export { ForecastTableSectionComponent };
//# sourceMappingURL=forecast-table-section.js.map