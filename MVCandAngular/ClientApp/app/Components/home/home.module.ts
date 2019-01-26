import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view-controllers/home-controller';

import { WeatherSectionComponent } from '../../components/weather/views-sections/weather-section';
import { SpecificNewsSectionComponent } from '../../components/news/view-sections/belarus-news/specific-news-section';

const appRoutes: Routes = [

    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        
        HomeComponent,
        SpecificNewsSectionComponent,
        WeatherSectionComponent
    ]
})

export class HomeModule { }