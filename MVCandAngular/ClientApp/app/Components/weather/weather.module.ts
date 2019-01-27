import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherComponent } from './view-controllers/weather-controller';
import { ForecastTableSectionComponent } from './views-sections/forecast-table-section';
import { ForecastAccordionSectionComponent } from './views-sections/forecast-accordion-section';
import { WeatherSectionComponent } from './views-sections/weather-section';

import { ChartComponent } from '../../shared/components/chart/chart';

const appRoutes: Routes = [

    { path: '', component: WeatherComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WeatherRoutingModule
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

export class WeatherModule { }