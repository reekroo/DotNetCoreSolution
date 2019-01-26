var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './view-controllers/weather-controller';
import { ForecastTableSectionComponent } from './views-sections/forecast-table-section';
import { ForecastAccordionSectionComponent } from './views-sections/forecast-accordion-section';
import { WeatherSectionComponent } from './views-sections/weather-section';
import { ChartComponent } from '../../shared/components/chart/chart';
var appRoutes = [
    { path: '', component: WeatherComponent },
];
var WeatherModule = /** @class */ (function () {
    function WeatherModule() {
    }
    WeatherModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild(appRoutes)
            ],
            declarations: [
                WeatherComponent,
                ForecastAccordionSectionComponent,
                ForecastTableSectionComponent,
                WeatherSectionComponent,
                ChartComponent
            ],
            providers: []
        })
    ], WeatherModule);
    return WeatherModule;
}());
export { WeatherModule };
//# sourceMappingURL=weather.module.js.map