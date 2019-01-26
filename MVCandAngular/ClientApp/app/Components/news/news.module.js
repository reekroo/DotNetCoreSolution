var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
var appRoutes = [
    { path: 'world', component: NewsComponent },
    { path: 'belarus', component: BelNewsComponent },
    { path: 'onliner', component: OnlinerNewsComponent },
    { path: 'citydog', component: CityDogNewsComponent },
    { path: 'tut', component: TutNewsComponent },
    { path: 'belarus-partisan', component: BelarusPartisanNewsComponent },
    { path: 'nasha-niva', component: NashaNivaNewsComponent },
    { path: 'belsat', component: BelsatNewsComponent },
    { path: 'svoboda', component: SvobodaNewsComponent }
];
var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(appRoutes)
            ],
            declarations: [
                NewsComponent, BelNewsComponent,
                OnlinerNewsComponent, TutNewsComponent, CityDogNewsComponent,
                BelarusPartisanNewsComponent, NashaNivaNewsComponent, BelsatNewsComponent, SvobodaNewsComponent,
                NewsSectionComponent, SpecificNewsSectionComponent, OnlinerNewsSectionComponent
            ]
        })
    ], NewsModule);
    return NewsModule;
}());
export { NewsModule };
//# sourceMappingURL=news.module.js.map