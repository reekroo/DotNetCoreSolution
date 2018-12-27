var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { BaseWeatherComponent } from "../../../shared/bases/weather/base-weather";
var ForecastTableSectionComponent = /** @class */ (function (_super) {
    __extends(ForecastTableSectionComponent, _super);
    function ForecastTableSectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForecastTableSectionComponent.prototype.getCollection = function (obj) {
        var result = new Array();
        for (var i = 0; i < obj.list.length; i++) {
            if ((i == 0) || (i > 0 && this.getDate(obj.list[i - 1].dt) != this.getDate(obj.list[i].dt))) {
                result.push(new Ar(obj.list[i].dt, []));
            }
            result[result.length - 1].list.push(obj.list[i]);
        }
        console.log(result);
        return result;
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
        })
    ], ForecastTableSectionComponent);
    return ForecastTableSectionComponent;
}(BaseWeatherComponent));
export { ForecastTableSectionComponent };
var Ar = /** @class */ (function () {
    function Ar(date, list) {
        this.date = date;
        this.list = list;
    }
    return Ar;
}());
//# sourceMappingURL=forecast-table-section.js.map