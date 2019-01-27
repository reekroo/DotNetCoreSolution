import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { NewsRoutingModule } from './news-routing.module';

import { NewsComponent } from './view-controllers/world-news-controller';
import { BelNewsComponent } from './view-controllers/belarus-news-controller';

import { OnlinerNewsComponent } from './controllers/onliner-news-controller';
import { TutNewsComponent } from './controllers/tut-news-controller';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan-news-controller';
import { NashaNivaNewsComponent } from './controllers/nashaniva-news-controller';
import { BelsatNewsComponent } from './controllers/belsat-news-controller';
import { SvobodaNewsComponent } from './controllers/svoboda-news-controller';
import { CityDogNewsComponent } from './controllers/citydog-news-controller';

import { NewsSectionComponent } from './view-sections/belarus-news/news-section';
import { SpecificNewsSectionComponent } from './view-sections/belarus-news/specific-news-section';
import { OnlinerNewsSectionComponent } from './view-sections/belarus-portal-news/onliner-news-section';

@NgModule({
    imports: [
        CommonModule,
        NewsRoutingModule
    ],
    declarations: [

        NewsComponent, BelNewsComponent,
        OnlinerNewsComponent, TutNewsComponent, CityDogNewsComponent,
        BelarusPartisanNewsComponent, NashaNivaNewsComponent, BelsatNewsComponent, SvobodaNewsComponent,
        NewsSectionComponent, SpecificNewsSectionComponent, OnlinerNewsSectionComponent        
    ]
})

export class NewsModule { }