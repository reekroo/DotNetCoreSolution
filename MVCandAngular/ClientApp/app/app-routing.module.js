var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeModule } from './Components/home/home.module';
import { NewsModule } from './Components/news/news.module';
import { BankModule } from './Components/bank/bank.module';
import { NaturalResourcesModule } from './Components/natural-resources/natural.resources.module';
import { WeatherModule } from './Components/weather/weather.module';
var appRoutes = [
    { path: '', loadChildren: function () { return HomeModule; } },
    { path: 'home', loadChildren: function () { return HomeModule; } },
    { path: 'index', loadChildren: function () { return HomeModule; } },
    { path: 'news', loadChildren: function () { return NewsModule; } },
    { path: 'bank', loadChildren: function () { return BankModule; } },
    { path: 'natural-resources', loadChildren: function () { return NaturalResourcesModule; } },
    { path: 'weather', loadChildren: function () { return WeatherModule; } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(appRoutes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map