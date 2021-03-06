var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NewsComponent } from './view-controllers/world-news-controller';
import { BelNewsComponent } from './view-controllers/belarus-news-controller';
import { OnlinerNewsComponent } from './controllers/onliner-news-controller';
import { TutNewsComponent } from './controllers/tut-news-controller';
import { BelarusPartisanNewsComponent } from './controllers/belaruspartisan-news-controller';
import { NashaNivaNewsComponent } from './controllers/nashaniva-news-controller';
import { BelsatNewsComponent } from './controllers/belsat-news-controller';
import { SvobodaNewsComponent } from './controllers/svoboda-news-controller';
import { CityDogNewsComponent } from './controllers/citydog-news-controller';
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
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(appRoutes)],
            exports: [RouterModule]
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());
export { NewsRoutingModule };
//# sourceMappingURL=news-routing.module.js.map